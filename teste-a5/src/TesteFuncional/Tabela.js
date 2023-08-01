import React from "react";
import {
  Container,
  StyledTable,
  StyledTableCell,
  StyledTableHeaderCell,
  StyledTableRow,
} from "./Styled";

const Tabela = () => {
  const results = [
    { x: 3, y: 2, z: 11, Resultado: "B" },
    { x: 150, y: 3, z: 455, Resultado: "C" },
    { x: 7, y: -1, z: -2, Resultado: "A" },
    { x: -2, y: 5, z: -5, Resultado: "A" },
    { x: 50, y: 3, z: 155, Resultado: "C" },
  ];

  return (
    <Container>
      <StyledTable>
        <thead>
          <StyledTableRow>
            <StyledTableHeaderCell colSpan={5}>Variáveis</StyledTableHeaderCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableHeaderCell>X</StyledTableHeaderCell>
            <StyledTableHeaderCell>Y</StyledTableHeaderCell>
            <StyledTableHeaderCell>Z</StyledTableHeaderCell>
            <StyledTableHeaderCell>Resultado</StyledTableHeaderCell>
          </StyledTableRow>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell>{result.x}</StyledTableCell>
              <StyledTableCell>{result.y}</StyledTableCell>
              <StyledTableCell>{result.z}</StyledTableCell>
              <StyledTableCell>{result.Resultado}</StyledTableCell>
            </StyledTableRow>
          ))}
        </tbody>
      </StyledTable>
    </Container>
  );
};

export default Tabela;
