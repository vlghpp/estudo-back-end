# Este é um módulo do curso de Back-end, deve ser visto depois do módulo de Express.js e antes do Express.js 2

## Dia 00 - Introdução a Banco de Dados - Definição 

Um banco de dados é necessário em uma aplicação para armazenar e organizar grandes volumes de dados de forma estruturada, permitindo acesso eficiente, copnsultas complexas, gartatia de integridade e persistência dos dados. A diferença entre a persistência em memória RAM e em armazenamento está na durabilidade dos dados: a RAM é volátil e os dados são perdidos após desligar o sistema, enquanto o armazenamento matém os dados mesmo após o desligamento.

## Dia 01 - Banco de Dados Relacional,SGBD, Tabelas, Colunas, Linhas e Dados - Definição, O que é?

### Banco de dados Relacional

Um banco de dados relacional é um sistema de armazenamento e organização de informações que utiliza tabelas inter-relacionadas para representar os dados. E le é composto por conjuntos de tabelas, onde cada tabela consiste em linhas(registros) e colunas (campos).

### SGBD

Um Sistema de Gerenciamento de Banco de Dados (SGBD), como o Azure Data Studio (o que vai ser utilizado neste diretório sobre BD), é uma ferramenta a de software utilizada para gerenciar, armazenar, organizar, consultar e manupular grandes volumes de dados.
Ele fornece uma interface gráfica e recursos de linha de comando para criar e gerenciar bancos de dados relacionais, executar consultas, monitorar desempenho, implementar medidas de segurança e realizar tarefas administrativas relacionadas aos dados.

### Tabela

Uma tabela em um banco de dados é uma estrutura organizada que armazena dados. Ela é usada para representar uma entidade ou um conjunto de entidades relacionadas. Cada tabela possui um nome único e é composta por um conjunto de linhas e colunas.

### Coluna 

Uma coluna é uma estrutura que define o tipo de dados que pode ser armazenado dentro de uma tabela. Cada coluna possui um nome exclusivo e representa um atributo especifico da entidade representada pela tabela. Por exemplo, em uma tabela de clientes, as colunas podem incluir nome, idade, endereço, etc.

### Dados

Dados são informações reais que são armazenadas em uma tabela de um banco de dados. Eles representam os valores específicos associados a cada coluna da tabela. Os dados podem ser números, textos, datas ou outros tipos, depdendendo da definição da coluna correspondente.

### Linhas

Uma linha é uma estrutura que define a coleção inteira de um registro, por exemplo, o nome, idade e endereço são localizados na mesma linha de uma pessoa específica.


## Dia 02 - Data Definition Language ou também DDL

OBS: Neste diretório vamos estar utilizando o Postgrees

### Tipos de dados

#### Númericos
- integer (números inteiros)
- numeric (números decimais)
- real (números de ponto flutuante de precisão simples)
- double precision (números de ponto flutuante de dupla precisão)

#### Texto
- character varying (cadeia de caracteres variável) ou var char - Define um limite de caracteres em um dado, por exemplo, um var char de 10, a informação que o banco de dados pode receber é de uma cadeia de caracteres de até 10 caracteres, ou seja, pode receber 1 ou 10.
-character (cadeia  de caracteres fixa) - O banco de dados reserva uma quantidade específica de caracteres, por exemplo 10, e mantém o espaço lá, mesmo estando vazio.
- text (texto de tamanho variável) - Pode colocar quantos caracteres quiser.

#### Data e Hora
- date (data)
- time (hora sem fuso horário)
- timestamp (data e hora com fuso horário)
- interval (intervalo de tempo)

#### Booleano

- boolean (verdadeiro ou falso)

## Dia 03 - Primeira Modelagem

Para fazer nossa primeira modelagem vamos utilizar o site [dbdiagram.io](https://dbdiagram.io/home), nele podemos criar tabelas de banco de dados e atribuir seus tipos.

### Exemplo:

![imagem](https://i.imgur.com/IQQh9Kx.png)

Aqui tempos 7 variaveis para nosso banco de dados, e ao seus lados o tipo delas, como já visto antes no __Dia 02 - DDL__

- Resultado

![imagem](https://i.imgur.com/QA3ZNbJ.png)

### OBS: No diretório (Dia 03 - Primeira Modelagem > index.js) tem um exercicio, fazer!!

- Meu resultado:

![imagem](https://i.imgur.com/oJ6KXke.png)
