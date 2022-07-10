import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Signup from "./views/Signup";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./components/NavBar";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

export default App;
