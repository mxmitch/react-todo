import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Signup from "./views/Signup";
import TodoList from "./components/TodoList";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./components/NavBar";

function App() {
  return (
    <CssBaseline>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </CssBaseline>
  );
}

export default App;
