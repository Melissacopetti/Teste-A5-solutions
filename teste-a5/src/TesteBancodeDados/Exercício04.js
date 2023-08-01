import React from "react";
import { Body, Code, CodeBox, CodeContainer } from "./Styled";
import { goToHome } from "../cordinator";
import { useNavigate } from "react-router-dom";

const Exercício04 = () => {
  const navigate = useNavigate();
  return (
    <Body>
      <h3>
        4. De acordo com o modelo apresentado no Exercício03, construa o comando
        para retorna r o nome da pessoa e o endereço completo ( CEP, Logradouro,
        Bairro, Cidade , UF, Numero e Complemento)
      </h3>
      <h2>Consulta de Dados:</h2>
      <CodeContainer>
        <CodeBox>
          <Code>
            {`
          SELECT Pessoa.Nome, Endereco.CEP, Endereco.Logradouro, Endereco.Bairro, Endereco.Cidade, 
          Endereco.UF, PessoaXEndereco.Numero, PessoaXEndereco.Complemento
          FROM Pessoa
          JOIN PessoaXEndereco ON Pessoa.Id = PessoaXEndereco.IdPessoa
          JOIN Endereco ON PessoaXEndereco.CEP = Endereco.CEP;
        `}
          </Code>
        </CodeBox>
      </CodeContainer>
      <button onClick={() => goToHome(navigate)}>Voltar</button>
    </Body>
  );
};

export default Exercício04;
