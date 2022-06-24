import React, { useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <Grid container rowSpacing={1}>
          <Grid item xs={9}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Update item"
              variant="outlined"
              size="small"
              type="text"
              placeholder="Update Item"
              value={input}
              name="text"
              className="todo-input edit"
              onChange={handleChange}
              ref={inputRef}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              className="todo-button"
              onClick={handleSubmit}
            >
              Update
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Grid container rowSpacing={1}>
          <Grid item xs={9}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Add a todo"
              variant="outlined"
              size="small"
              type="text"
              value={input}
              name="text"
              className="todo-input"
              onChange={handleChange}
              ref={inputRef}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              className="todo-button"
              onClick={handleSubmit}
            >
              Add Item
            </Button>
          </Grid>
        </Grid>
      )}
    </form>
  );
}

export default TodoForm;
