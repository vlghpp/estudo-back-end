# Repositório feito para demarcar meu progresso na área de Backend - Utilizando ferramentas como: Node.js | Express.js | Typescript | APIs | HTTP

## Anatomia das APIs - Dia 00

As APIs são formadas por 3 coisas: Request line, Request Header e Request body

- Request line -> é a primeira linha de uma solicitação (request) HTTP enviada pelo cliente para o servidor. Ela contém três partes principais: Método HTTP que está sendo usado (GET/POST/PUT/DELETE), URI que está presente na URL e a Versão HTTP. Exemplo: https://api.exemplo.com/usuarios. Neste exemplo supomos que o usuario está dando um GET nesta rota, o /usuarios é o URI, que significa qual recurso no servidor o cliente está desejando interagir e HTTP 1.1 (protocolo mais comumente utilizado)

- Request Header -> são os metadados enviados na solicitação para fornecer informações sobre a solicitação. Cada cabeçalho é especificado com um nome, dois pontos e, em seguida, seguido pelo valor desse cabeçalho. Exemplo Content-Type: no-cache (é quando você da o console.log() em uma promise com o json)

- Request Body -> É onde colocamos as informações adicionais que vamos enviar para o servidor. *As requisições GET não suportam body, essas não devem precisar enviar estruturas complexas de dados para o servidor*. No body é feito que nem no app Insomnia no módulo de Node-js, em que pra fazer um POST(criar um novo usuario) era necessário criar um Body em JSON e escrever o que queriamos enviar para o servidor.

### CRUD O que é?

CRUD é um acrônimo comum na área de desenvolvimento de software que representa as quatro operações básicas de manipulação de dados: Create (criar), Read (ler), Update (atualizar) e Delete (excluir). Essas operações são fundamentais em sistemas que lidam com bancos de dados ou qualquer forma de armazenamento de dados.

        - C (create/criar) -> Criar novos registros ou entidades no banco de dados.
        - R (read/ler) -> Ler ou recuperar dados existentes do banco de dados.
        - U (update/atualizar) ->  Atualizar dados existentes no banco de dados.
        - D (delete/excluir) -> Excluir dados existentes do banco de dados

Essas operações formam a base para a maioria das interações de um aplicativo com um banco de dados ou sistema de armazenamento de dados.

## Módulo HTTP - Dia 01

Neste dia, vimos como abrir um servidor e fazer requisições com ele, é possivel acessa-lo pelo localhost:300/user no navegador. Mas este não é a melhor prática de utilizar o método HTTP e criação de APIs. Veremos no próximo dia o melhor jeito, que é usando o Express.js o framework de JavaScript!

## Introdução ao Express.js

Para usarmos da ferramenta Express, o framework de JavaScript, precisamos instânciar um objeto requisitando o pacote, como já visto antes.
```
    const express = require('express')
    const app = express()

    app.use(express.json())

    Desta forma requisitamos ao pacote ('express'), e definimos como app nossa constante que vai ter acesso as funções do pacote express.
    Este é um padrão utilizado quando for trabalhar com requisições HTTP, requisitamos o pacote ('express') definimos ele ao app, e depois dizemos com qual formato vamos usar app.use(express.json()) - neste caso o JSON.
```
Bom, agora que você já sabe como vamos iniciar nossos projetos ao se tratar com requisições HTTP, vamos as dita cujas:

- __GET__
    ```
        app.get('/usuarios', (requisicao, resposta) => {
            console.log('MÉTODO GET CHAMADO')
            resposta.status(200).send(pessoas)
        })
    ```
    - Desta forma conseguimos acessar o método __GET__, chamando nosso app.get('passando a URI', (chamando a requisição e resposta)
    - Sobre a __URI__ já foi explicado anteriormente no Dia 00 Anatomia das APIs, mas dando uma revisãozinha: URI é a sessão, ou a parte, em que o cliente está desejando acessar.
    - Agora sobre requisição e resposta: 
        > - __Requisição__ indica toda e qualquer requisição que o usuário pedir ou enviar, ou seja, em casos como post o usuário tem que enviar um json.body para adicionar algo, então é na requisição que nós programadores vamos ter acesso, outro exemplo é também os parametros, mas o que são os parametros? são por exemplo, os IDs dos usuários,clientes, cartões, etc. 
        > - __Resposta__ indica toda resposta em que vamos enviar do servidor para o cliente, como o Status Code de uma tentativa de requisição GET/POST/PUT/DELETE (__.status()__), por exemplo. Ou um texto em que vamos printar caso a requisição seja bem sucedida (.send(__'texto bem sucedido')__).

- __GET by ID__
    ```
        app.get('/usuarios/:id', (requisicao, resposta) => {
        const id = requisicao.params.id
        const encontrarPessoa = pessoas.find(pessoa => pessoa.id == id)
        if(encontrarPessoa){
            resposta.status(200).send(encontrarPessoa)
        }else{
            resposta.status(404).send('Não foi possivel encontrar o id')
        }
        });
    ```

    - Desta forma conseguimos ter acesso a um corpo específico dos nossos objetos, caso o nosso cliente deseje. O que muda o __GET by ID__ do __GET__ é apenas o parametro que é passado na rota: /:id
    - Este comportamento de /:id significa que o servidor está esperando que o cliente digite algo, ou seja, da pra interpretar que ele está esperando uma váriavel, que neste caso é o parametro id.
    - Para acessar este parametro podemos utilizar a __Requisição__, como já dito no método GET. Com o comando: 
    ```
        const id = requisicao.params.id

        Em que acessamos nossa requisição com a propriedade 'params'.

        NOTA: caso você tenha mais de um parametro na rota ela também aparecera no requisicao.params!
    ```


### Exportando funções de um arquivo .js

Podemos exportar funções de um arquivo específico js para utilizar em um outro arquivo, por exemplo, tem-se um arquivo chamado calculadora.js que tem 4 funções: Somar, Diminuir, Multiplicar e Dividir e você tem outro arquivo js chamado utilizandoFuncoes.js que você utilza estas funções fazendo testes. E como isto é possível? Desta forma:

#### No arquivo calculadora.js
```
    module.exports = {
        somar, 
        diminuir,
        multiplicar,
        dividir
    }
```

#### No arquivo utilizandoFuncoes.js

```
    const calculadora = require("./calculadora")
    console.log(somar(2, 3))
```
Desta forma você está requisitando um pacote de ./calculadora e "cria um objeto da classe calculadora" e você tem acesso as funções daquele objeto.


## AGORA VAMOS PARA O MÓDULO DE BANCO DE DADOS DAR CONTINUIDADE AO CONTEÚDO, VOLTAMOS PARA O MÓDULO DE EXPRESS.JS 2 DEPOIS DE TERMINAR O BANCO DE DADOS.
