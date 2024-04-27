const http = require('http')

const server = http.createServer((req, res) => {
    console.log('Chegou na API')
    console.log(req.method)
    console.log(req.url)
    if(req.method === 'GET' && req.url.startsWith('/user')){
        res.writeHead(200)
        res.end('Todos usuários')
        console.log('Req GET recebida')
    }

    if(req.method === 'POST' && req.url.startsWith('/user')){
        let bodyRaw = ''
        req.on('data', data => bodyRaw += data)
        let bodyJson = JSON.parse(bodyRaw)
        request.once('end', () => {
            //do the action
        })
    }
    res.writeHead(404)
    res.end('Endpoint não encontrado, revise a url!')
})

server.listen(3000, () => {
    console.log('Servidor na porta 3000');
})