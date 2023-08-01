## Teste A5 - Aplicação Frontend ReactJS

<p align="center">
  <img width="300" height="200" src="https://a5solutions.com/wp-content/uploads/2022/06/icon-a5-1.png">
</p>
<p align="center">
Bem-vindo(a) ao Teste A5, uma aplicação frontend ReactJS desenvolvida para a seleção para a vaga de desenvolvedor na empresa A5 Solutions. Este projeto consiste na resolução de 8 questões, sendo duas de teste funcional, duas de teste de banco de dados utilizando MySQL e quatro de programação, executadas em Java e Javascript.
</p>

##  Índice 

* [Descrição](#descrição)
* [Como utilizar o Projeto](#como-utilizar-o-projeto)
* [Arquivos Complementares](#arquivos-complementares)
* [Link do Projeto](#link-do-projeto)
* [Funcionalidades](#funcionalidades)


## Descrição 
<div align='justify'>
 Este é um projeto desenvolvido com o objetivo de submissão ao processo seletivo para a vaga de Desenvolvedor da empresa A5 - Solutions. A proposta é de resolução de 8 exercícios de programação e banco de dados, a fim do candidato demonstrar conhecimento prático na área.
  </div>

## Como utilizar o projeto
Antes de prosseguir, você precisará ter o seguinte software instalado em sua máquina:

* Node.js (versão 10 ou superior)
* Git

### Clonando o projeto
Para clonar o projeto, execute o seguinte comando em seu terminal:

`git clone https://github.com/seu-usuario/teste-a5.git`

Isso criará uma cópia local do repositório em sua máquina.

### Instalando as bibliotecas
Após clonar o projeto, navegue até o diretório raiz do projeto usando o terminal e execute o seguinte comando para instalar as bibliotecas necessárias:

`npm install`

Isso instalará todas as dependências do projeto listadas no arquivo package.json.

### Rodando a aplicação localmente
Para executar a aplicação localmente, utilize o seguinte comando:

`npm start`

Este comando irá iniciar um servidor de desenvolvimento e abrirá a aplicação no seu navegador padrão. Acesse http://localhost:3000 para visualizar a aplicação.

### Executando os testes
Os testes funcionais e de banco de dados requerem configurações e dependências adicionais para serem executados corretamente. Certifique-se de seguir as instruções fornecidas nas respectivas pastas dos testes.

### Testes Funcionais
Para executar os testes funcionais, siga as instruções fornecidas na pasta testes-funcionais do projeto.

### Testes de Banco de Dados
Os testes de banco de dados foram desenvolvidos utilizando MySQL. Certifique-se de ter um servidor MySQL configurado e em execução em sua máquina antes de executar os testes. Siga as instruções fornecidas na pasta testes-banco-de-dados do projeto.

### Build da aplicação
Se desejar fazer o build da aplicação para implantação em ambiente de produção, execute o seguinte comando:

`npm run build`

Isso criará uma versão otimizada da aplicação na pasta build. Você poderá implantar o conteúdo dessa pasta em um servidor web ou em qualquer ambiente adequado para hospedagem de aplicativos estáticos.
Neste projeto, além do build, utilizei os seguintes passos para criar um link para visualização:

`cd build`

`cp index.html 200.html`

`surge`

Dessa forma, será criado um domínio para compartilhamento da aplicação.

## Arquivos complementares
Na pasta anexa "Complementos", você encontrará os seguintes arquivos:

* Tabelas SQL: Este diretório contém arquivos SQL com a definição das tabelas utilizadas no projeto. Certifique-se de importar esses arquivos em seu servidor MySQL antes de executar os testes de banco de dados.

* Fluxograma: O arquivo com extensão .drawio é um fluxograma criado com a extensão Draw.io. Este fluxograma representa o processo de funcionamento da aplicação e pode ajudar na compreensão geral do projeto.

## Link do projeto
[Teste-A5](https://teste-desenvolvimento.surge.sh/)


## Funcionalidades
<div align='justify'>
  O projeto consise em uma tela inicial com subtítulos indicando o tipo do exercício, e botões que direcionam a cada exercício individualmente.
  Os exercícios têm sua descrição no cabeçalho, e o código exibido dentro de um Container, tanto em Java, quanto em Javascript, quanto em SQL. O fluxograma da questão 4 foi desenvolvido no VSCode através da extenção supracitada, e exibida no formato .svg.
  As questões 6, 7 e 8 foram feitas em Javascript e traduzidas para a linguagem Java, ambos códigos são exibidos. 
</div>



