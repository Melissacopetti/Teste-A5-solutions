import React from "react";
import { Routes, Route } from "react-router-dom";
import PaginaInicial from "./PaginaInicial/paginaInicial";
import Exercício01 from "./TesteFuncional/Exercício01";
import Exercício02 from "./TesteFuncional/Exercício02";
import Exercício03 from "./TesteBancodeDados/Exercício03";
import Exercício04 from "./TesteBancodeDados/Exercício04";
import Exercício05 from "./TesteDeProgramacao/Exercício05";
import Exercício06 from "./TesteDeProgramacao/Exercício06";
import Exercício07 from "./TesteDeProgramacao/Exercício07";
import Exercício08 from "./TesteDeProgramacao/Exercício08";

const Router = () => {
  return (
    <Routes>
      <Route index element={<PaginaInicial />} />
      <Route path="exercicio01" element={<Exercício01 />} />
      <Route path="exercicio02" element={<Exercício02 />} />
      <Route path="exercicio03" element={<Exercício03 />} />
      <Route path="exercicio04" element={<Exercício04 />} />
      <Route path="exercicio05" element={<Exercício05 />} />
      <Route path="exercicio06" element={<Exercício06 />} />
      <Route path="exercicio07" element={<Exercício07 />} />
      <Route path="exercicio08" element={<Exercício08 />} />
    </Routes>
  );
};

export default Router;
