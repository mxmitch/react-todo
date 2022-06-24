import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import Checkbox from "@mui/material/Checkbox";
import { TiEdit } from "react-icons/ti";
import TodoForm from "./TodoForm";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({ id: null, value: "" });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ""
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  if (todos.length === 0) {
    return <div>Nothing to do yet. Add a todo in the form above.</div>;
  }
  return todos.map((todo, index) => (
    <Paper sx={{ padding: "20px" }}>
      <Grid container>
        <Grid item xs={2}>
          <Checkbox {...label} />
        </Grid>
        <Grid
          item
          xs={8}
          className={todo.isComplete ? "todo-row complete" : "todo-row"}
          key={index}
        >
          <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
          </div>
        </Grid>
        <Grid item xs={2}>
          <div className="icons">
            <RiCloseCircleLine
              onClick={() => removeTodo(todo.id)}
              className="delete-icon"
            />

            <TiEdit
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
              className="edit-icon"
            />
          </div>
        </Grid>
      </Grid>
    </Paper>
  ));
}

export default Todo;
