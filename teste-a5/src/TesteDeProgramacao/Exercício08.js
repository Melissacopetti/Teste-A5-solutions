import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { goToHome } from "../cordinator";
import { useNavigate } from "react-router-dom";
import { Body, CodeContainer } from "./Styled";

const Exercício08 = () => {
  const navigate = useNavigate();
  const stringSemEspacosJava = `
    public class StringWithoutSpace {
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
            String input = "  Palavra  ";
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
  
  var input = "  Palavra  ";
  var result = processString(input);
  console.log("Resultado: " + result);
  
`;

  const syntaxHighlighterStyle = {
    ...a11yDark,
    'code[class*="language-"]': {
      ...a11yDark['code[class*="language-"]'],
    },
  };
  return (
    <Body>
      <h3>
        8. Criar um método que receba uma variável do tipo String, remova os
        espaços em branco do início e do final do conteúdo, altere todas as
        Letras ‘A’ por ‘B’ e se o tamanho da variável for maior que 3 retorne
        somente os 3 primeiros caracteres, senão retorne a String inteira.
      </h3>
      <h2>Execução em Java:</h2>
      <CodeContainer>
        <SyntaxHighlighter language="java" style={syntaxHighlighterStyle}>
          {stringSemEspacosJava}
        </SyntaxHighlighter>
      </CodeContainer>
      <h2>
        Por familiaridade com a linguagem, optei por executá-la também em
        Javascript:
      </h2>
      <CodeContainer>
        <SyntaxHighlighter language="javascript" style={syntaxHighlighterStyle}>
          {stringSemEspaçosJS}
        </SyntaxHighlighter>
      </CodeContainer>
      <button onClick={() => goToHome(navigate)}>Voltar</button>
    </Body>
  );
};

export default Exercício08;
