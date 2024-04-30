/*
Desafio: Usando o pacote express, crie todas as APIs (CRUD) de um sistema de ALUNOS 
(Nesse desafio é necessário manipular os dados dos alunos utilizando uma lista) onde seja possível:

- Buscar todos os alunos (GET)
- Buscar um aluno específico através do ID (GET by ID)
- Cadastrar um novo aluno (POST)
- Atualizar os dados de um aluno através do ID (PUT)
- Deletar um aluno através do ID (DELETE)
*/


const express = require('express')
const app = express()

app.use(express.json())

const alunos = []

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