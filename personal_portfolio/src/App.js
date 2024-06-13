
import "./App.css";
import React from "react";
import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Resume from "./MenuPages/Resume"
import About from "./MenuPages/About";  
import Projects from "./MenuPages/Projects"
import Home from "./MenuPages/Home"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path=" projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

  export default App;
