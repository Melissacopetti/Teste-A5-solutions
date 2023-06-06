import React from "react";
import {
  goToEx01,
  goToEx02,
  goToEx03,
  goToEx04,
  goToEx05,
  goToEx06,
  goToEx07,
  goToEx08,
} from "../cordinator";
import { useNavigate } from "react-router-dom";
import { Body, DivButtons, DivButtonsA, Title } from "./StyledInitial";

const PaginaInicial = () => {
  const navigate = useNavigate();
  return (
    <Body>
      {" "}
      <Title>Teste área de Desenvolvimento</Title>
      <h3>Entrega/Instruções :</h3>
      <p>
        A entrega deve ser feita em um repositório Github, privado (se o
        repositório estiver público, será automaticamente eliminado); Após
        finalizar é necessário adicionar o usuário deva5solutions com
        colaborador para que possamos ter acesso ao seu código; Readme
        explicando as etapas necessárias para rodar o projeto; Código limpo serà
        diferencial; Use e abuse de: Criatividade, Teste Unitários, MVC, SOLID,
        Boas Práticas de Codificação, Performance.
      </p>
      <section>
        <h3>Teste Funcional</h3>
        <DivButtons>
          <button onClick={() => goToEx01(navigate)}>Exercício 01</button>

          <button onClick={() => goToEx02(navigate)}>Exercício 02</button>
        </DivButtons>
      </section>
      <section>
        <h3>Teste de Banco de Dados</h3>
        <DivButtons>
          <button onClick={() => goToEx03(navigate)}>Exercício 03</button>

          <button onClick={() => goToEx04(navigate)}>Exercício 04</button>
        </DivButtons>
      </section>
      <section>
        <h3>Teste de Programação</h3>
        <DivButtonsA>
          <button onClick={() => goToEx05(navigate)}>Exercício 05</button>

          <button onClick={() => goToEx06(navigate)}>Exercício 06</button>

          <button onClick={() => goToEx07(navigate)}>Exercício 07</button>

          <button onClick={() => goToEx08(navigate)}>Exercício 08</button>
        </DivButtonsA>
      </section>
    </Body>
  );
};

export default PaginaInicial;
