import React from "react";
import {
  Container,
  TableBody,
  TableContainer,
  TableData,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "./Styled";
import FluxogramaImage from '../Assets/fluxograma.svg'

const Exercício02 = () => {
  return (
    <div>
      <h3>
        2. Em uma escola , a média final é dada pela média aritmética de
        TableRowês notas. E a mesma tem o seguinte esquema de avaliação:
      </h3>
      <Container>
        <TableContainer>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Média</TableHeaderCell>
              <TableHeaderCell>Resultado</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableData>0 até 4.9</TableData>
              <TableData>Aluno em recuperação</TableData>
            </TableRow>
            <TableRow>
              <TableData>5 até 6.9</TableData>
              <TableData>Aluno em prova final</TableData>
            </TableRow>
            <TableRow>
              <TableData>7 até 10</TableData>
              <TableData>Aluno aprovado</TableData>
            </TableRow>
          </TableBody>
        </TableContainer>
      </Container>
      <p>
        Desenvolva um fluxograma que a partir da entrada das três notas mostre a
        situação do aluno. No caso do aluno em recuperação e prova final, mostre
        também quanto falta para o aluno necessita para a tingir a média.
      </p>
      <h1>Meu Fluxograma</h1>
      <img src={FluxogramaImage} alt="Fluxograma" />
    </div>
  );
};

export default Exercício02;
