const express = require('express')
const app = express()
const routerBook = require('./rotas/livro.js')

app.use(express.json())

app.use('/livros', routerBook)

app.listen(3333, () => {
    console.log("SERVIDOR ABERTO NA PORTA 3333");
})

