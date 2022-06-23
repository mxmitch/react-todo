import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <Container>
        <Grid container rowSpacing={1}>
          <Grid item xs={12}>
            <h1>
              <Typography variant="h4">What's the plan for today?</Typography>
            </h1>
          </Grid>
          <Grid item xs={8}>
            <Box
              sx={{
                border: "1px solid #CCC",
                padding: "20px",
                borderRadius: "5px"
              }}
            >
              <Grid container xs={12} rowSpacing={1}>
                <Grid item xs={12}>
                  <TodoForm onSubmit={addTodo} />
                </Grid>
                <Grid item xs={12}>
                  <Todo
                    todos={todos}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default TodoList;
