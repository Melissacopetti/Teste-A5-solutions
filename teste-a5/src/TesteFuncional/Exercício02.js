import React from "react";
import { FluxogramaImg, TableImage, Body } from "./Styled";
import TableImg from "../Assets/tabelaNotas.png";
import FluxogramaImage from "../Assets/fluxograma.svg";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../cordinator";

const Exercício02 = () => {
  const navigate = useNavigate()
  return (
    <Body>
      <h3>
        2. Em uma escola , a média final é dada pela média aritmética de
        três notas. E a mesma tem o seguinte esquema de avaliação:
      </h3>
      <TableImage src={TableImg} alt="tabela com as notas" />
      <p>
        Desenvolva um fluxograma que a partir da entrada das três notas mostre a
        situação do aluno. No caso do aluno em recuperação e prova final, mostre
        também quanto falta para o aluno necessita para a tingir a média.
      </p>
      <h2>Fluxograma:</h2>
      <FluxogramaImg src={FluxogramaImage} alt="Fluxograma" />
      <button onClick={()=>goToHome(navigate)}>Voltar</button>


    </Body>
  );
};

export default Exercício02;
