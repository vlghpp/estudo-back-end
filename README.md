# Repositório feito para demarcar meu progresso na área de Backend - Utilizando ferramentas como: Node.js | Express.js | Typescript | APIs | HTTP

## Anatomia das APIs - Dia 00

- As APIs são formadas por 3 coisas: Request line, Request Header e Request body
    > - Request line -> é a primeira linha de uma solicitação (request) HTTP enviada pelo cliente para o servidor. Ela contém três partes principais: Método HTTP que está sendo usado (GET/POST/PUT/DELETE), URI que está presente na URL e a Versão HTTP. Exemplo: https://api.exemplo.com/usuarios. Neste exemplo supomos que o usuario está dando um GET nesta rota, o /usuarios é o URI, que significa qual recurso no servidor o cliente está desejando interagir e HTTP 1.1 (protocolo mais comumente utilizado)
    > - Request Header -> são os metadados enviados na solicitação para fornecer informações sobre a solicitação. Cada cabeçalho é especificado com um nome, dois pontos e, em seguida, seguido pelo valor desse cabeçalho. Exemplo Content-Type: no-cache (é quando você da o console.log() em uma promise com o json)
    > - Request Body -> É onde colocamos as informações adicionais que vamos enviar para o servidor. *As requisições GET não suportam body, essas não devem precisar enviar estruturas complexas de dados para o servidor*. No body é feito que nem no app Insomnia no módulo de Node-js, em que pra fazer um POST(criar um novo usuario) era necessário criar um Body em JSON e escrever o que queriamos enviar para o servidor.

### CRUD O que é?

- CRUD é um acrônimo comum na área de desenvolvimento de software que representa as quatro operações básicas de manipulação de dados: Create (criar), Read (ler), Update (atualizar) e Delete (excluir). Essas operações são fundamentais em sistemas que lidam com bancos de dados ou qualquer forma de armazenamento de dados.

        - C (create/criar) -> Criar novos registros ou entidades no banco de dados.
        - R (read/ler) -> Ler ou recuperar dados existentes do banco de dados.
        - U (update/atualizar) ->  Atualizar dados existentes no banco de dados.
        - D (delete/excluir) -> Excluir dados existentes do banco de dados

- Essas operações formam a base para a maioria das interações de um aplicativo com um banco de dados ou sistema de armazenamento de dados.

## Módulo HTTP - Dia 01


