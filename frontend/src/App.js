import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Model from "./pages/Model";
import NotFound from "./pages/NotFound";
import NavBar from "./pages/NavBar";
import "./style/all.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <NavBar />
        <Routes>
          <Route path="/model" element={<Model />} />
        </Routes>
    </Router>
  );
}

export default App;
