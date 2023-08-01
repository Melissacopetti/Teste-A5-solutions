import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Body, CodeContainer } from "./Styled";
import { goToHome } from "../cordinator";
import { useNavigate } from "react-router-dom";

const Exercicio05 = () => {
  const navigate = useNavigate();
  const javaCode = `
  public interface Car {
    void accelerate(int speed); // Cada execução aumenta a velocidade em speed
    void brake(int speed); // Cada execução diminui a velocidade em speed
    int getCurrentSpeed(); // Informa a velocidade atual
}

public class CarImpl implements Car {
    private int currentSpeed;

    public void accelerate(int speed) {
        currentSpeed += speed;
    }

    public void brake(int speed) {
        currentSpeed -= speed;
    }

    public int getCurrentSpeed() {
        return currentSpeed;
    }
}
  `;

  const syntaxHighlighterStyle = {
    ...a11yDark,
    'code[class*="language-"]': {
      ...a11yDark['code[class*="language-"]'],
    },
  };

  return (
    <Body>
      <h3>5. Escreva uma classe que implemente a seguinte interface abaixo:</h3>
      <CodeContainer>
        <SyntaxHighlighter language="java" style={syntaxHighlighterStyle}>
          {javaCode}
        </SyntaxHighlighter>
      </CodeContainer>
      <button onClick={() => goToHome(navigate)}>Voltar</button>
    </Body>
  );
};

export default Exercicio05;
