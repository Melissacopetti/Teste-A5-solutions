import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const Exercício06 = () => {
  const javaCalculator = `
    public class Calculadora {
        private double memory;
    
        public void add(double a, double b) {
            memory = a + b;
        }
    
        public void subtract(double a, double b) {
            memory = a - b;
        }
    
        public void multiply(double a, double b) {
            memory = a * b;
        }
    
        public void divide(double a, double b) {
            if (b != 0) {
                memory = a / b;
            } else {
                System.out.println("Error: Division by zero");
            }
        }
    
        public double getResult() {
            return memory;
        }
    
        public void clearMemory() {
            memory = 0;
        }
    }
    // Exemplo de aplicação:
    Calculator calculator = new Calculator();
    calculator.add(5, 3); // Realiza a adição de 5 e 3
    System.out.println(calculator.getResult()); // Exibe o resultado: 8.0

    calculator.subtract(10, 4); // Realiza a subtração de 10 e 4
    System.out.println(calculator.getResult()); // Exibe o resultado: 6.0

    calculator.multiply(2.5, 3); // Realiza a multiplicação de 2.5 e 3
    System.out.println(calculator.getResult()); // Exibe o resultado: 7.5

    calculator.divide(10, 2); // Realiza a divisão de 10 por 2
    System.out.println(calculator.getResult()); // Exibe o resultado: 5.0

    calculator.clearMemory(); // Limpa a memória

calculator.divide(10, 0); // Tentativa de divisão por zero
// Exibe a mensagem de erro: Error: Division by zero

  `;
  
  const javascriptCalculator = `
  class Calculadora {
      constructor() {
          this.memory = 0;
      }
  
      add(a, b) {
          this.memory = a + b;
      }
  
      subtract(a, b) {
          this.memory = a - b;
      }
  
      multiply(a, b) {
          this.memory = a * b;
      }
  
      divide(a, b) {
          if (b !== 0) {
              this.memory = a / b;
          } else {
              console.log("Error: Division by zero");
          }
      }
  
      getResult() {
          return this.memory;
      }
  
      clearMemory() {
          this.memory = 0;
      }
  }
  
  // Exemplo de aplicação:
  const calculator = new Calculadora();
  calculator.add(5, 3); 
  console.log(calculator.getResult());
  
  calculator.subtract(10, 4);
  console.log(calculator.getResult()); 
  
  calculator.multiply(2.5, 3); 
  console.log(calculator.getResult()); 
  
  calculator.divide(10, 2); 
  console.log(calculator.getResult()); 
  
  calculator.clearMemory();
  
  calculator.divide(10, 0); 
`;

  return (
    <div>
      <h3>
        6. Escreva uma classe que represente uma calculadora com as operações:
        adição, subtração, multiplicação, divisão e memória. Defina também as
        formas de entrada e apresentação do resultado.
      </h3>
      <p>Execução em Java:</p>
      <SyntaxHighlighter language="java" style={solarizedlight}>
        {javaCalculator}
      </SyntaxHighlighter>
      <p>
        Por familiaridade com a linguagem, optei por executá-la também em
        Javascript:
      </p>
      <SyntaxHighlighter language="javascript" style={solarizedlight}>
        {javascriptCalculator}
      </SyntaxHighlighter>
    </div>
  );
};

export default Exercício06;
