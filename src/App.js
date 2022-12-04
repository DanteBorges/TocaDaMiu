import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../src/pages/home/index";
import Enviar from "./pages/enviar/index";
import Navbar from "./components/navbar";
import Sobre from "./pages/sobre";
import Contato from "./pages/contato";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ferramentas" element={<Home />} />
          <Route path="/enviar" element={<Enviar />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
