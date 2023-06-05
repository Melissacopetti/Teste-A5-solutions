import React from "react";
import CodeSnippet from "../CodeSnippet";
import Tabela from "./Tabela";

const Exercício01 = () => {
  // const CodigoExercicio = `
  // inicio
  // leia x
  // leia y
  // z <= x * y + 5
  // se Z <= 0 então
  // Resultado <= "A"
  // senão
  // se z <= 100 então
  // Resultado <= "B"
  // senão
  // Resultado <= " C "
  // fim-se
  // fim-se
  // escrever: Z, Resultado;
  // `;
  


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
    <div>
      <h3>1. Observe o seguinte código:</h3>
      {/* <pre>{CodigoExercicio}</pre> */}
      <p>
        Simule a execução do algoritmo, e em seguida complete o quadro com os
        valores finais das variáveis Z e Resultado para os respectivos valores
        de entrada de X e Y:{" "}
      </p>
      <h1>Tabela com os Resultados</h1>
      <Tabela />
      <p>As funções para resolução do exercício encontram-se abaixo:</p>

      <p>Primeira linha:</p>
      <CodeSnippet code={linha01JS} />

      <p>Segunda linha:</p>
      <CodeSnippet code={linha02JS} />

      <p>Terceira linha:</p>
      <CodeSnippet code={linha03JS} />

      <p>Quarta linha:</p>
      <CodeSnippet code={linha04JS} />

      <p>Quinta linha:</p>
      <CodeSnippet code={linha05JS} />
    </div>
  );
};

export default Exercício01;
