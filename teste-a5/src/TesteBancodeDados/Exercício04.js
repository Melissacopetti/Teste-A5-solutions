import React from "react";

const Exercício04 = () => {
  return (
    <div>
      <h3>
        4. De acordo com o modelo apresentado no Exercício03, construa o comando
        para retorna r o nome da pessoa e o endereço completo ( CEP, Logradouro,
        Bairro, Cidade , UF, Numero e Complemento)
      </h3>
      <h2>Consulta de Dados:</h2>
      <pre>
        <code>
          {`
          SELECT Pessoa.Nome, Endereco.CEP, Endereco.Logradouro, Endereco.Bairro, Endereco.Cidade, Endereco.UF, PessoaXEndereco.Numero, PessoaXEndereco.Complemento
          FROM Pessoa
          JOIN PessoaXEndereco ON Pessoa.Id = PessoaXEndereco.IdPessoa
          JOIN Endereco ON PessoaXEndereco.CEP = Endereco.CEP;
        `}
        </code>
      </pre>
    </div>
  );
};

export default Exercício04;
