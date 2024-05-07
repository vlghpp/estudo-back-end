/*
Desafio: Com base no exercício anterior CRUD#2 - Alunos:

Modularize o acesso aos dados utilizando como base o código disponível abaixo:
const delay = (time) =>
    new Promise(resolve =>
        setTimeout(resolve, time)
    )


const AlunosDatabase = (() => {
    let idSequence = 1
    const alunos = []
    const insert = async (aluno) => {
        await delay(400)
        const id = idSequence++
        const data = { ...aluno, id }
        alunos[id] = data
        return data
    }

    const list = async () => {
        await delay(100)
        return Object.values(alunos)
    }

    const get = async (id) => {
        await delay(200)
        return alunos[id]
    }

    const update = async (aluno, id) => {
        await delay(400)
        alunos[id] = { ...aluno, id }
        return aluno
    }

    const del = async (id) => {
        await delay(500)
        delete alunos[id]
    }

    return {
        insert,
        list,
        get,
        update,
        del,
    }

})

module.exports = {
    AlunosDatabase
}


Você deve substituir as lógicas de cada API criada anteriormente pelas funções contidas no módulo do "banco de dados".
*/
const express = require('express')
const bancoDeDados = require('./bancoDeDados')
const app = express()
const acessoBanco = bancoDeDados.AlunosDatabase()
app.use(express.json())

app.get('/alunos', async (requisicao, resposta) => {
    const mostrarAlunos = await acessoBanco.list()
    resposta.status(200).send(mostrarAlunos)
})

app.get('/alunos/:id', async (requisicao, resposta) => {
    const id = requisicao.params.id
    const alunoEspecifico = await acessoBanco.get(id)
    resposta.status(200).send(alunoEspecifico)
})

app.post('/alunos',async  (requisicao, resposta) => {
    const adicionarAluno = requisicao.body
    await acessoBanco.insert(adicionarAluno)
    resposta.status(200).send('Você conseguiu adicionar com sucesso um aluno!')
})

app.put('/alunos/:id',async  (requisicao, resposta) => {
    const id = requisicao.params.id
    const alunoAtualizado = requisicao.body
    await acessoBanco.update(alunoAtualizado, id)
    resposta.status(200).send("Você atualizou com sucesso!")
})

app.delete('/alunos/:id',async  (requisicao, resposta) => {
    const id = requisicao.params.id
    acessoBanco.del(id)
    resposta.status(200).send("Aluno removido com sucesso!")
})

app.listen(2222, () => {
    console.log("SERVIDOR DA PORTA 2222 ABERTO!")
})