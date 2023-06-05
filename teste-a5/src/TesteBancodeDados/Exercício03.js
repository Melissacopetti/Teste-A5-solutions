import React from "react";
import Tabelas from "../Assets/tabelaSQL.png";

const Exercício03 = () => {
  return (
    <div>
      <h1>Teste de Banco de Dados</h1>
      <img src={Tabelas} alt="tabelasSQL" />
      <h3>
        3. De acordo com o modelo acima, construa os comandos para inserir e
        para atualizar os campos da tabela “Pessoa ” :
      </h3>
      <div>
        <h2>Definição das Tabelas:</h2>
        <pre>
          <code>
            {`
            CREATE TABLE IF NOT EXISTS Pessoa (
              Id VARCHAR(255) PRIMARY KEY,
              Nome VARCHAR(255) NOT NULL,
              DataNascimento DATETIME NOT NULL
            );

            CREATE TABLE IF NOT EXISTS Endereco (
              CEP VARCHAR(36) PRIMARY KEY,
              Logradouro VARCHAR(255) NOT NULL,
              Cidade VARCHAR(255) NOT NULL,
              UF VARCHAR(255) NOT NULL,
              Bairro VARCHAR(255) NOT NULL
            );

            CREATE TABLE IF NOT EXISTS PessoaXEndereco (
              Numero SMALLINT NOT NULL,
              Complemento SMALLINT,
              IdPessoa VARCHAR(255),
              CEP VARCHAR(36),
              FOREIGN KEY (IdPessoa) REFERENCES Pessoa (Id),
              FOREIGN KEY (CEP) REFERENCES Endereco (CEP)
            );
          `}
          </code>
        </pre>

        <h2>Inserção de Dados:</h2>
        <pre>
          <code>
            {`
            INSERT INTO Pessoa (Id, Nome, DataNascimento)
            VALUES ('01', 'Ana Maria', '1980-05-03');
          `}
          </code>
        </pre>

        <h2>Atualização de Dados:</h2>
        <pre>
          <code>
            {`
            UPDATE Pessoa
            SET Nome = 'Maria Souza', DataNascimento = '1985-05-10'
            WHERE Id = '1';
          `}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Exercício03;
