import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const Exercício07 = () => {
    const converteStringJava = `
    public class ConvertString {
        public static int sum(String var1, String var2) {
            try {
                int num1 = Integer.parseInt(var1);
                int num2 = Integer.parseInt(var2);
                return num1 + num2;
            } catch (NumberFormatException e) {
                System.out.println("Erro na conversão de String para Integer: " + e.getMessage());
                return 0;
            }
        }
    
        public static void main(String[] args) {
            String var1 = "10";
            String var2 = "20";
            int result = sum(var1, var2);
            System.out.println("A soma é: " + result);
        }
    }
    

  `;
  
  const converteStringJS = `
  function sum(var1, var2) {
    try {
      var num1 = parseInt(var1);
      var num2 = parseInt(var2);
      return num1 + num2;
    } catch (error) {
      console.log("Erro na conversão de String para Integer: " + error.message);
      return 0;
    }
  }
  
  var var1 = "10";
  var var2 = "20";
  var result = sum(var1, var2);
  console.log("A soma é: " + result);
`;
  return (
    <div>
    <h3>
    7. Criar um método que receba 2 variáveis do tipo String, converta as variáveis para Integer e retorne a soma dos valores. Caso ocorra erro na conversão, exibir uma mensagem no console.
    </h3>
    <p>Execução em Java:</p>
    <SyntaxHighlighter language="java" style={solarizedlight}>
      {converteStringJava}
    </SyntaxHighlighter>
    <p>
      Por familiaridade com a linguagem, optei por executá-la também em
      Javascript:
    </p>
    <SyntaxHighlighter language="javascript" style={solarizedlight}>
      {converteStringJS}
    </SyntaxHighlighter>
  </div>
  )
}

export default Exercício07