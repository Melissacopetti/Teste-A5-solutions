import React from "react";
import CodeSnippet from "../CodeSnippet";
import Tabela from "./Tabela";
import { Body, CodeContainer } from "./Styled";
import { goToHome } from "../cordinator";
import { useNavigate } from "react-router-dom";

const Exercício01 = () => {
  const navigate = useNavigate();
  const CodigoExercicio = `
  inicio
  leia x
  leia y
  z <= x * y + 5
  se Z <= 0 então
  Resultado <= "A"
  senão
  se z <= 100 então
  Resultado <= "B"
  senão
  Resultado <= " C "
  fim-se
  fim-se
  escrever: Z, Resultado;
  `;

  const linha01JS = `
  let x = 3;
  let y = 2;
  let z = x * y + 5;
  
  if (z <= 0) {
      var resultado = "A";
  } else {
      if (z <= 100) {
          var resultado = "B";
      } else {
          var resultado = "C";
      }
  }
  
  console.log("Z: " + z);
  console.log("Resultado: " + resultado);
`;

  const linha02JS = `
  let x = 150;
  let y = 3;
  let z = x * y + 5;

  if (z <= 0) {
    var resultado = "A";
  } else {
    if (z <= 100) {
        var resultado = "B";
    } else {
        var resultado = "C";
    }
  }

console.log("Z: " + z);
console.log("Resultado: " + resultado);
`;

  const linha03JS = `
  let x = 7;
  let y = -1;
  let z = x * y + 5;

if (z <= 0) {
    var resultado = "A";
} else {
    if (z <= 100) {
        var resultado = "B";
    } else {
        var resultado = "C";
    }
}

console.log("Z: " + z);
console.log("Resultado: " + resultado);
`;

  const linha04JS = `
  let x = -2;
  let y = 5;
  let z = x * y + 5;

if (z <= 0) {
    var resultado = "A";
} else {
    if (z <= 100) {
        var resultado = "B";
    } else {
        var resultado = "C";
    }
}

console.log("Z: " + z);
console.log("Resultado: " + resultado);
`;

  const linha05JS = `
  let x = 50;
  let y = 3;
  let z = x * y + 5;

if (z <= 0) {
    var resultado = "A";
} else {
    if (z <= 100) {
        var resultado = "B";
    } else {
        var resultado = "C";
    }
}

console.log("Z: " + z);
console.log("Resultado: " + resultado);
`;
  return (
    <Body>
      <h3>1. Observe o seguinte código:</h3>
      <pre>{CodigoExercicio}</pre>
      <p>
        Simule a execução do algoritmo, e em seguida complete o quadro com os
        valores finais das variáveis Z e Resultado para os respectivos valores
        de entrada de X e Y:
      </p>
      <h2>Tabela com os Resultados:</h2>
      <Tabela />
      <h2>As funções para resolução do exercício encontram-se abaixo:</h2>

      <p>Primeira linha:</p>
      <CodeContainer>
        <CodeSnippet code={linha01JS} />
      </CodeContainer>

      <p>Segunda linha:</p>
      <CodeContainer>
        <CodeSnippet code={linha02JS} />
      </CodeContainer>

      <p>Terceira linha:</p>
      <CodeContainer>
        <CodeSnippet code={linha03JS} />
      </CodeContainer>

      <p>Quarta linha:</p>
      <CodeContainer>
        <CodeSnippet code={linha04JS} />
      </CodeContainer>

      <p>Quinta linha:</p>
      <CodeContainer>
        <CodeSnippet code={linha05JS} />
      </CodeContainer>

      <button onClick={() => goToHome(navigate)}>Voltar</button>
    </Body>
  );
};

export default Exercício01;
