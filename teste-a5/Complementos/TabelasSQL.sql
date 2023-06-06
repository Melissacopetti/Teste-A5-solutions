CREATE TABLE IF NOT EXISTS Pessoa (
	Id VARCHAR(255) PRIMARY KEY,
    Nome VARCHAR(255) NOT NULL,
    DataNascimento DATE NOT NULL
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


INSERT INTO Pessoa (Id, Nome, DataNascimento)
VALUES ('01', 'Ana Maria', '1980-05-03');

UPDATE Pessoa
SET Nome = 'Maria Souza', DataNascimento = '1985-05-10'
WHERE Id = '1';

SELECT Pessoa.Nome, Endereco.CEP, Endereco.Logradouro, Endereco.Bairro, Endereco.Cidade, Endereco.UF, PessoaXEndereco.Numero, PessoaXEndereco.Complemento
FROM Pessoa
JOIN PessoaXEndereco ON Pessoa.Id = PessoaXEndereco.IdPessoa
JOIN Endereco ON PessoaXEndereco.CEP = Endereco.CEP;

