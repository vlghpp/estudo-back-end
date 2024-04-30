const express = require('express')
const app = express()

app.use(express.json())

const data = []
//Diz que se a API for requsitada com um GET ele retornara status code 200 e printará na tela o send()
app.get('/alunos', (requisicao, resposta) => {
    console.log(requisicao.params)
    resposta.status(200).send(data)
})
app.get('/alunos/:id', (requisicao, resposta) =>{
    console.log(requisicao.params.id)
    const encontrarPessoa = data.find(pessoa => pessoa.id = requisicao.params.id)
    resposta.status(200).send(encontrarPessoa)
})
app.post('/alunos', (requisicao, resposta) => {
    const usuario = requisicao.body
    console.log(usuario)
    data.push(usuario)
    console.log('Você fez um POST de alunos');
    resposta.status(200).send(`Usuario ${usuario.id} foi adicionado ao array!`)
})
app.put('/alunos/:id', (requisicao, resposta) =>{
    const id = Number(requisicao.body.id)
    const atualizacaoUsuario = requisicao.body
    const index = data.findIndex(user => user.id == id)
    data[index] = atualizacaoUsuario
    resposta.status(200).send(`Usuário ${id} atualizado`)
}) 
app.delete('/alunos/:id', (requisicao, resposta) => {
    const id = Number(requisicao.params.id)
    const index = data.findIndex(user => user.id == id)
    data.splice(index, 1)
    resposta.status(200).send(`Usuário ${index} foi deletado!`)
})
app.listen(3000, () => {
    console.log('Servidor da porta 3000 aberto!')
})