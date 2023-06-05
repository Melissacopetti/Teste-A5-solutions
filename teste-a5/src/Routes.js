import React from "react";
import Exercício01 from "./TesteFuncional/Exercício01";
import { Routes, Route } from "react-router-dom";
import PaginaInicial from "./PaginaInicial/paginaInicial";
import Exercício02 from "./TesteFuncional/Exercício02";
import Exercício03 from "./TesteBancodeDados/Exercício03";
import Exercício04 from "./TesteBancodeDados/Exercício04";

const Router = () => {
  return (
    <Routes>
      <Route index element={<PaginaInicial />} />
      <Route path="exercicio01" element={<Exercício01 />} />
      <Route path="exercicio02" element={<Exercício02 />} />
      <Route path="exercicio03" element={<Exercício03 />} />
      <Route path="exercicio04" element={<Exercício04 />} />
    </Routes>
  );
};

export default Router;
