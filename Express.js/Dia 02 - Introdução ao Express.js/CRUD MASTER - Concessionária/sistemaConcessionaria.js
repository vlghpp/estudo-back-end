const express = require('express')
const { veiculosDatabase } = require('./bancoDeDados')
const app = express()

app.use(express.json())

app.get('/veiculos', async(requisicao, resposta) => {
    resposta.status(200).send(await veiculosDatabase().list())
})

app.get('/veiculos/:id', async(requisicao, resposta) =>{
    const id = requisicao.params.id
    resposta.status(200).send(await veiculosDatabase().get(id))
})

app.post('/veiculos', async(requisicao,resposta)=>{
    const carroNovo = requisicao.body
    await veiculosDatabase().insert(carroNovo)
    resposta.status(200).send('Você adicionou um novo carro ao nosso catalogo!')
})
app.put('/veiculos/:id', async(requisicao, resposta) =>{
    const id = requisicao.params.id
    const carroAtualizado = requisicao.body
    await veiculosDatabase().update(carroAtualizado, id)
    resposta.status(200).send(`O carro ${id} foi atualizado!`)
})
app.delete('/veiculos/:id', async(requisicao, resposta) =>{
    const id = requisicao.params.id
    await veiculosDatabase().del(id)
    resposta.status(200).send(`O carro ${id} foi excluido com sucesso!`)
})

app.listen(3004, () =>{
    console.log("Servidor da porta 3004 ABERTO!")
})