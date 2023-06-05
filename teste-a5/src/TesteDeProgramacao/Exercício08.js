import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const Exercício08 = () => {
    const stringSemEspacosJava = `
    public class MyJavaClass {
        public static String processString(String input) {
            // Remover espaços em branco do início e do final
            String trimmed = input.trim();
            
            // Substituir todas as letras 'A' por 'B'
            String replaced = trimmed.replace('A', 'B');
            
            // Verificar o tamanho da variável
            if (replaced.length() > 3) {
                // Retornar somente os 3 primeiros caracteres
                return replaced.substring(0, 3);
            } else {
                // Retornar a string inteira
                return replaced;
            }
        }
    
        public static void main(String[] args) {
            String input = "  Apple  ";
            String result = processString(input);
            System.out.println("Resultado: " + result);
        }
    }
    `;
  
  const stringSemEspaçosJS = `
  function processString(input) {
    const trimmed = input.trim();

    const replaced = trimmed.replace(/A/g, 'B');
    
    if (replaced.length > 3) {
      return replaced.substring(0, 3);
    } else {
      return replaced;
    }
  }
  
  var input = "  Apple  ";
  var result = processString(input);
  console.log("Resultado: " + result);
  
`;
  return (
    <div>
        <h3>8. Criar um método que receba uma variável do tipo String, remova os espaços em branco do início e do final do conteúdo, altere todas as Letras ‘A’ por ‘B’ e se o tamanho da variável for maior que 3 retorne somente os 3 primeiros caracteres, senão retorne a String inteira.</h3>
        <p>Execução em Java:</p>
    <SyntaxHighlighter language="java" style={solarizedlight}>
      {stringSemEspacosJava}
    </SyntaxHighlighter>
    <p>
      Por familiaridade com a linguagem, optei por executá-la também em
      Javascript:
    </p>
    <SyntaxHighlighter language="javascript" style={solarizedlight}>
      {stringSemEspaçosJS}
    </SyntaxHighlighter>
    </div>
  )
}

export default Exercício08