import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";      // Página inicial
import Sobre from "./pages/sobre";    // Página sobre nós
import Funcionalidades from "./pages/funcionalidades"; // Página de funcionalidades
import FaleConosco from "./pages/faleconosco";  // Página de Fale Conosco
import Cadastrar from "./pages/cadastrar";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />                 {/* Rota para Home */}
        <Route path="/home" element={<Home />} />  
        <Route path="/sobre" element={<Sobre />} />           {/* Rota para Sobre Nós */}
        <Route path="/funcionalidades" element={<Funcionalidades />} /> {/* Rota para Funcionalidades */}
        <Route path="/faleconosco" element={<FaleConosco />} /> {/* Rota para Fale Conosco */}
        <Route path="/cadastrar" element={<Cadastrar />} />
      </Routes>
    </Router>
  );
}

export default App;