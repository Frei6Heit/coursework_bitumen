import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Model from "./pages/Model";
import NotFound from "./pages/NotFound";
import NavBar from "./pages/NavBar";
// import InformationModel from './pages/Information'
import "./style/all.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/model" element={< Model/>}/>
        {/* <Route path="/" element={<InformationModel />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
