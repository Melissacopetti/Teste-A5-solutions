import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const Exercício05 = () => {
  const javaCode = `
  public interface CodigoJava {
    void accelerate(int speed); // Cada execução aumenta a velocidade em speed
    void brake(int speed); // Cada execução diminui a velocidade em speed
    int getCurrentSpeed(); // Informa a velocidade atual
}

public class CodigoJavaImpl implements CodigoJava {
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

  return (
    <div>
      <h3>5. Escreva uma classe que implemente a seguinte interface abaixo:</h3>
      <SyntaxHighlighter language="java" style={solarizedlight}>
        {javaCode}
      </SyntaxHighlighter>
    </div>
  );
};

export default Exercício05;
