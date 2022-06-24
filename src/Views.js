import React from "react";
import Home from "./views/Home";
import About from "./views/About";
import NavBar from "./components/NavBar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

const Views = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/">
          <Navigate to="/Home" />
        </Route>
        <Route exact path="/About" element={<About />} />
      </Routes>
    </Router>
  );
};

export default Views;
