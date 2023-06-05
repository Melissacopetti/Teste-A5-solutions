import React from "react";
import { goToEx01, goToEx02, goToEx03, goToEx04, goToEx05, goToEx06, goToEx07, goToEx08 } from "../cordinator";
import { useNavigate } from "react-router-dom";


const PaginaInicial = () => {
  const navigate = useNavigate()
  return (
    <div>
      {" "}
      <h1>Teste área de Desenvolvimento</h1>
      <h3>Entrega/Instruções :</h3>
      <p>
        A entrega deve ser feita em um repositório Github, privado (se o repositório estiver público, será automaticamente eliminado); Após finalizar é necessário adicionar o usuário deva5solutions com colaborador para que possamos ter acesso ao seu código; Readme explicando as etapas necessárias para rodar o projeto; Código limpo serà diferencial; Use e abuse de: Criatividade, Teste Unitários, MVC, SOLID, Boas Práticas de Codificação, Performance.
      </p>
      <nav>
        {/* <input type="checkbox" checked={checked} onChange={handleChange} /> */}

        <h2>Teste Funcional</h2>
        <ul>
          <li>
            <button onClick={()=>goToEx01(navigate)}>Exercício 01</button>
          </li>
          <li>
          <button onClick={()=>goToEx02(navigate)}>Exercício 02</button>
          </li>
        </ul>
      </nav>
      <nav>
        {/* <input type="checkbox" checked={checked} onChange={handleChange} /> */}

        <h2>Teste de Banco de Dados</h2>
        <ul>
          <li>
          <button onClick={()=>goToEx03(navigate)}>Exercício 03</button>
          </li>
          <li>
          <button onClick={()=>goToEx04(navigate)}>Exercício 04</button>
          </li>
        </ul>
      </nav>
      <nav>
        {/* <input type="checkbox" checked={checked} onChange={handleChange} /> */}

        <h2>Teste de Programação</h2>
        <ul>
          <li>
          <button onClick={()=>goToEx05(navigate)}>Exercício 05</button>
          </li>
          <li>
          <button onClick={()=>goToEx06(navigate)}>Exercício 06</button>
          </li>
          <li>
          <button onClick={()=>goToEx07(navigate)}>Exercício 07</button>
          </li>
          <li>
          <button onClick={()=>goToEx08(navigate)}>Exercício 04</button>
          </li>
        </ul>
      </nav>
 
    </div>
  );
};

export default PaginaInicial;
