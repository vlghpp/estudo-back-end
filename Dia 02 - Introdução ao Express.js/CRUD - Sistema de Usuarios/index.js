/*
Express - CRUD
Desafio: Usando o pacote express, crie todas as APIs (CRUD) de um sistema de USUÁRIOS. (Nesse desafio não é necessário manipular os dados dos usuários)
(NÃO ERA NECESSÁRIO MANIPULAR, MAS IMPLEMENTEI UM CÓDIGO EM QUE MANIPULA :/ )

- Buscar todos os usuários (GET)
- Buscar um usuário específico através do ID (GET by ID)
- Cadastrar um novo usuário (POST)
- Atualizar os dados de um usuário através do ID (PUT)
- Deletar um usuário através do ID (DELETE)
*/


const express = require('express')
const app = express()

app.use(express.json())

const pessoas = []

app.get('/usuarios', (requisicao, resposta) => {
    console.log('MÉTODO GET CHAMADO')
    resposta.status(200).send(pessoas)
})

app.get('/usuarios/:id', (requisicao, resposta) => {
    const id = requisicao.params.id
    const encontrarPessoa = pessoas.find(pessoa => pessoa.id == id)
    if(encontrarPessoa){
        resposta.status(200).send(encontrarPessoa)
    }else{
        resposta.status(404).send('Não foi possivel encontrar o id')
    }
});
app.post('/usuarios', (requisicao, resposta) => {
    const usuarioNovo = requisicao.body
    pessoas.push(usuarioNovo)
    resposta.status(200).send('Você adicionou um usuário novo com sucesso!')
})
app.put('/usuarios/:id', (requisicao, resposta) => {
    const id = requisicao.params.id
    const atualizacaoUsuario = requisicao.body
    const index = pessoas.findIndex(pessoa => pessoa.id == id)
    if(index > -1){
        pessoas[index] = atualizacaoUsuario
        resposta.status(200).send('Você atualizou o usuário com sucesso!')
    }else{
        resposta.status(404).send('Não foi possivel encontrar o usuário desejado!')
    }
})

app.delete('/usuarios/:id', (requisicao, resposta) => {
    const id = requisicao.params.id
    const encontrarPessoa = pessoas.findIndex(pessoa => pessoa.id == id)
    if(encontrarPessoa > -1){
        pessoas.splice(encontrarPessoa, 1)
        resposta.status(200).send('Você removeu um usuário com sucesso!')
    }else{
        resposta.status(404).send('Não foi possivel encontrar o usuário desejado')
    }
})
app.listen(2000, () => {
    console.log('SERVIDOR ABERTO');
})