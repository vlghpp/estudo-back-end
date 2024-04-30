//Exemplo de como criar um servidor em javascript 



//Crio o objeto http, que vai herdar toda a biblioteca 'http'
const http = require('http')

//Crio o servidor baseado na biblioteca 'http'
const server = http.createServer((req, res) => {
    //Aqui você deve adicionar a lógica para lidar com as requisições recebidas
    if(req.method == 'GET'){
        res.writeHead(200)
        res.end("Hello World!")
    }
    if(req.method == 'GET' && req.url.startsWith('/hello')){
        res.writeHead(200)
        res.end('Hello')
    }

    //Se não encontrar o endpoint, ou seja, a rota. Envie uma reposta com status code 404 (not found)
    res.writeHead(404)
    res.end('Endpoint não encontrado, revise a url!')
})

//Falo para o servidor qual porta ele tem que escutar
server.listen(3000, () =>{
    console.log('Servidor iniciado em http://localhost:3000');
})