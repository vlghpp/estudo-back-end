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

app.use(express.json())

app.get('/alunos', (requisicao, resposta) => {
    resposta.status(200).send(alunos)
})

app.get('/alunos/:id', (requisicao, resposta) => {
    const id = requisicao.params.id
    const encontrarAluno =  alunos.find(aluno => aluno.id == id)
    if(encontrarAluno){
        resposta.status(200).send(encontrarAluno)
    }else{
        resposta.status(404).send('Não foi possível encontrar o aluno designiado ao id!')
    }
})

app.post('/alunos', (requisicao, resposta) => {
    const adicionarAluno = requisicao.body
    alunos.push(adicionarAluno)
    resposta.status(200).send('Você conseguiu adicionar com sucesso um aluno!')
})

app.put('/alunos/:id', (requisicao, resposta) => {
    const id = requisicao.params.id
    const encontrarAluno = alunos.findIndex(alunos => alunos.id == id)
    if(encontrarAluno > -1){
        const alunoAtualizado = requisicao.body
        alunos[encontrarAluno] = alunoAtualizado
        resposta.status(200).send('Você atualizou com sucesso o aluno desejado!')
    }else{
        resposta.status(404).send('Não foi possível encontrar o usuário desejado!')
    }
})

app.delete('/alunos/:id', (requisicao, resposta) => {
    const id = requisicao.params.id
    const encontrarAluno = alunos.findIndex(alunos => alunos.id == id)
    if(encontrarAluno > -1){
        alunos.splice(encontrarAluno, 1)
        resposta.status(200).send('O aluno foi deletado com sucesso!')
    }else{
        resposta.status(404).send('Não foi possível encontrar o aluno desejado!')
    }
})

app.listen(2222, () => {
    console.log("SERVIDOR DA PORTA 2222 ABERTO!")
})