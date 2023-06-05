import React from 'react';
import { Container, TableBody, TableContainer, TableData, TableHeader, TableHeaderCell, TableRow } from './Styled';

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
      <TableContainer>
        <TableHeader>
          <TableRow>
            <TableHeaderCell >Variáveis</TableHeaderCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>X</TableHeaderCell>
            <TableHeaderCell>Y</TableHeaderCell>
            <TableHeaderCell>Z</TableHeaderCell>
            <TableHeaderCell>Resultado</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results.map((result, index) => (
            <TableRow key={index}>
              <TableData>{result.x}</TableData>
              <TableData>{result.y}</TableData>
              <TableData>{result.z}</TableData>
              <TableData>{result.Resultado}</TableData>
            </TableRow>
          ))}
        </TableBody>
      </TableContainer>
    </Container>
  );
};

export default Tabela;

