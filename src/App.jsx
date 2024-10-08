import React from "react";
import Navbar from "./Componet/Navbar";
import About from "./Componet/About";
import Home from "./Componet/Home";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Your routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
