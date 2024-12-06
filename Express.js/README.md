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

    - Put x Patch 
        > - PUT pode ser usado em situações em que há acesso ao recurso completo (por exemplo, todos os campos do documento a ser atualizado) ou a necessidade de substituir totalmente o recurso. É necessário enviar sempre o recurso completo (com todos os campos);
        > - PATCH pode ser usado para atualizações parciais e pode receber apenas o campo que será atualizado, o que pode significar menor volume de tráfego de dados.


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


##  Introdução a protocolos 

Protocolo da camada 5 (aplicação) é os navegadores, e aplicativos. Serve como um protocolo de cliente-servidor, onde centraliza as demandas para o servidor e o cliente só faz a requisição como: GET, POST, PATCH, DELETE.

### HTTP X P2P

P2P ou peer-two-peer é uma maneira de tranferência de dados também, assim como o HTTP, mas ao invés de centralizar as demandas no servidor o cliente colabora nesse processo. Não há mais uma clara divisão entre Cliente-Servidor, cada cliente também é servidor e vice-versa. Isto é útil quando você precisa distribuir um trabalho ou necessita baixar algo de vários lugares diferentes. Um exemplo de P2P é o Torrent, BitTorrent.

### FTP 

File Transport Protocol é um protocolo para transferência de arquivos na internet.

### BitTorrent (P2P)

Além de ser um protocolo, também é um aplicativo para troca de arquivos na internet.

### SMTP

Simple Mail Transfer Protocol (protocolo simples de tranferência de e-mail), protocolo para enviar e-mails.

### Portas Padrão

| Porta  | Padrão |
| ------------- | ------------- |
| 80  | Padrão HTTP  |
| 443  | Padrão HTTPS  |
| 5432  | Usada pra conexão com serviços do banco de dados PostgresSQL  |
| 3306/3307  | Usada pra conexão com o banco MySQL  |
| 587 | Utilizada para conexões SMTP (Simple Mail Transfer Protocol, o protocolo de envio e recebimento de e-mails)  |
| de 1023* até 65535  | Livres para uso  |


### Protegendo a API 

Há algumas ferramentas de captura de pacotes como Wireshark que escutam baseado em um filtro a troca de informações entre Cliente-Servidor, então, métodos como POST, GET podem ser capturados.
Como resolver isso:

Atualmente o código da api AluraBooks está dessa forma, sendo servido por http (não seguro)
```javascript
 server.listen(8000, () => {
  console.log("API disponível em http://localhost:8000")
})

```

Uma forma de deixar mais seguro é usando https, que usa criptografia. Então é possivel gerar uma senha para o servidor (server.key) e um certificado (server.crt), essa forma encriptografando para https.

**Considerações inportantes antes de executar o comando OpenSSL**
- Comando deve ser executado na pasta onde há o arquivo que está servindo a API
- É necessário fazer o 'require' do https `const https = require("https")`
- Agora pode mudar o código

Usando ferramenta OpenSSL para fazer essas chaves: 
<br>

`openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout server.key -out server.crt`

Agora transformando nossa API para https:

```javascript
https.createServer(
    {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.crt')
    },
    server
).listen(8000, () => {
    console.log("API disponível em https://localhost:8000")
})

```

Dessa forma ele lê os conteudos dos arquivos gerados pelo OpenSSL e coloca a API para escutar na porta 8000 do https.
Agora o endereço que era `http://localhost:8000` vira `https://localhost:8000`.

### Query Params x Req Params

Req params, é quando definimos `https://localhost/livros/:nome`, dessa forma referência uma parte da URL para identificar um valor específico.


```javascript
app.get('/livros/:nome', (req, res) => {
    return res.status(200).send(`Bem vindo, ${req.params.nome}`)
})
```

Também podemos utilizar os Query Params, são parâmetros enviados atráves dos “?”. Exemplo `https://localhost:8000/?nome=henrique`, os query params são mais utilizados quando queremos fazer um redirecionamento ou quando temos muitos parâmetros na url

Repare como ficou nossa rota inicial agora, para pegarmos essa Query Stringnós chamamos o req.query.name, é o mesmo parâmetro que passamos na url o ?name

```javascript
app.get('/', (req, res) => {
    return res.status(200).send(`Bem vindo, ${req.query.nome}`)
})
```

#### Query Strings

Podemos utilizar as query strings para enviar parâmetros em uma URL, por exemplo fazendo da seguinte forma: `http://localhost/livros?categoria=3`. Mas e se além da categoria, também quiséssemos filtrar pelo autor? Nesse caso, faríamos assim: `/livros?categoria=3&autor=1`. Ou seja, utilizamos o caractere & para separar os nomes dos parâmetros que configuramos.

Pensando agora em outro exemplo, mais complexo, poderíamos ter a seguinte URL:

`http://eletronicos.com/products?search=TV&maxPrice=1000&brand=ACME&model=XPTO&delivery=free&`

Nesse caso, a URL representa uma busca por uma TV da marca ACME e modelo XPTO, com preço máximo de R$ 1.000,00 e taxa de entrega grátis. O interessante de ter os parâmetros na URL, é que além de ficar óbvio que o request é um GET, fica fácil para o usuário compartilhar a busca que ele fez, pois é só copiar e colar a URL já com todos os parâmetros. Se utilizássemos POST, ou qualquer outro método onde os parâmetros vão no corpo da mensagem, isso não seria possível.

A especificação do HTTP não define um número máximo de parâmetros para uma URL, e nem mesmo um tamanho máximo para a URL (conforme a seção 3.2.1 da RFC 2616). Por isso, cada navegador e servidor pode implementar o seu próprio limite máximo, embora haja uma convenção de suportar até 2000 caracteres. Portanto, quando estiver criando seus requests, caso eles estejam muito grandes, considere convertê-los para um POST, ou talvez refatorar as URLs para simplificar o envio de parâmetros.


## HTTP 1.1 X HTTP 2.0

As maiores diferenças entre esses dois protocolos é que o primeiro deixa a desejar as requisições sequenciais, ou seja, cada vez que fazemos um REQUEST, temos que esperar terminar para começar o outro no contexto de uma conexão TCP, que é o canal por onde as mensagens passam.

HTTP 1.1 - Deixa a desejar: Requisições sequenciais
HTTP 2.0 - Oferece: Multiplexação

HTTP 1.1 - Deixa a desejar: Cabeçalhos textuais
HTTP 2.0 - Oferece: Compactação de cabeçalho

HTTP 1.1 - Deixa a desejar: Request obrigatório
HTTP 2.0 - Oferece: Server push


Utilizando a biblioteca spdy para utilizar o HTTP 2.0
- Importante utilizar o OpenSSL para habilitar o HTTPS: `openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout server.key -out server.crt`
- Importante ter instalado: `npm i spdy`
- Importante fazer o "build" atualizado da nossa aplicação, que é como se empacotássemos a aplicação para produção `npm run build`


```javascript
const spdy = require("spdy")
const express = require("express")
const fs = require("fs")

const app = express()

app.use(express.static("build"))

spdy.createServer(
    {
        key: fs.readFileSync("./server.key"),
        cert: fs.readFileSync("./server.crt")
    },
    app
).listen(3002, (err) => {
    if(err){
        throw new Error(err)
    }
    console.log("Listening on port 3002")
})

```


## Api Express com MongoDB

Modelo é um objeto que representa uma coleção na base de dados.

Em bancos SQL, a avaliação de requisitos e modelagem dos dados costuma ser feita de forma adiantada com relação à aplicação, pois o SQL é, por definição, mais “estrito” com relação à estrutura de um banco, aos tipos de dados associados a cada campo e ao relacionamento entre as tabelas.

Já em um banco de objetos como o MongoDB, esta estrutura é menos rígida e pode ser atualizada de acordo com as necessidades da aplicação, então, dois documentos livro podem ser diferentes entre si sem que para isso sejam necessárias alterações significativas na base de dados.

Porém, em ambos os tipos de banco existem três tipos de relacionamentos entre dados. São eles:

1. **_Relacionamento “um para um”_** (one-to-one ou 1:1), quando um registro está conectado a somente outro registro em outro conjunto de dados. Exemplo: uma pessoa registrada no sistema da nossa livraria tem somente um CPF relacionado a ela, e não é possível que duas pessoas diferentes tenham o mesmo CPF ou uma pessoa ter dois CPFs.
2. **_Relacionamento “um para muitos” _**(one-to-many ou 1:n), quando um registro pode ser conectado a mais de um registro em outro conjunto de dados. Exemplo: as pessoas cadastradas em nossa livraria podem fornecer mais de um número de telefone celular, porém, cada um destes números de celular pode estar associado a apenas uma pessoa por vez.
3. **_Relacionamento “muitos para muitos”_** (many-to-many ou n:m), quando mais de um registro pode estar relacionado a mais de um registro em outro conjunto. Exemplo: um livro pode ter mais de um autor, ao mesmo tempo que este mesmo autor pode ter escrito vários livros.


## MongoDB - Embed x Reference

### Embedding
Ao contrário do SQL, o MongoDB segue o princípio de “dados que são acessados juntos devem ser armazenados juntos”.

Pensando assim, embedding significa incorporar dados que são relacionados e inseri-los em um documento. É usado para simplificar as consultas (queries) aos dados e melhorar a performance geral das ferramentas nas consultas.

Veja abaixo um exemplo de documento autor com um array de livros incorporado ao restante dos dados. Arrays de objetos são uma forma comum de embedding de dados.


```json
{
 "_id": ObjectId("579a7256f245878acabac457c"),
 "nome": "JRR Tolkien",
 "livros": [
   {"titulo": "O Senhor dos Anéis", "paginas": 500},
   {"titulo": "O Hobbit", "paginas": 200},
   {"titulo": "O Silmarillion", "paginas": 400}
 ]
}
```

Porém, incorporar dados em um único documento pode criar documentos muito grandes, o que pode acabar prejudicando a performance da aplicação, pois um documento deve ser carregado em memória por inteiro. Além disso, pode também fazer com que novos dados sejam incorporados indefinidamente a um único objeto e aumentando o tamanho em bytes além do limite de 16 mb por documento de um objeto BSON.


### Referencing

Referencing significa fazer referência a documentos em outra coleção. Nesse caso, os dados são guardados em coleções separadas, mas ainda é importante que mantenham vínculo entre eles. A referência é feita através de um campo específico do documento, normalmente o campo id ou equivalente.

A agregação de dados via reference visa evitar duplicação de dados (um aspecto muito importante no SQL, também chamada de “normalização de dados”) e também gerenciar o tamanho dos documentos para evitar a criação de documentos muito grandes, que prejudicariam a performance do sistema.

Por outro lado, a junção de dados via referência faz com que uma consulta se transforme em duas ou várias. Por exemplo, uma consulta aos dados de um livro resultaria em consultas tanto na coleção livros quanto na coleção autores, o que consome mais recursos e pode impactar a performance de leitura.


```json
{
 "_id": ObjectId("9gPOwsIJaf5knkzpvYNlk9flz"),
 "nome": "JRR Tolkien",
 "livros": [
   ObjectId("ctstNHEEKCLwTN7gN7KgNprYb"),
   ObjectId("qdQwKNumukFzuSYh58WKLN3TV"),
   ObjectId("KNUeheO0UbtpFYwLuJpdwbD5P")
 ]
}

```

| 	|               	**Embedding**               	|
|:---:|:-------------------------------------------------:|
| PRO | Dados retornados em uma única consulta        	|
| PRO | atualização e exclusão de dados em única operação |
| CON | duplicação de dados                           	|
| CON | documentos maiores                            	|
<br>
| 	|              	**Referencing**              	|
| PRO | Não há duplicação de dados                    	|
| PRO | documentos menores                            	|
| CON | necessário "unir" dados de múltiplos documentos   |