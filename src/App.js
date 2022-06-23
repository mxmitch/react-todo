import React from "react";
import TodoList from "./components/TodoList";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="todo-app">
      <CssBaseline>
        <NavBar />
        <TodoList />
      </CssBaseline>
    </div>
  );
}

export default App;
