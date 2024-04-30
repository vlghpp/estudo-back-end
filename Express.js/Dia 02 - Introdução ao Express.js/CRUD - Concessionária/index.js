/*
Desafio: Uma concessionária precisa de um sistema para cadastrar os veículos disponíveis em sua loja e excluir os veículos quando são vendidos. 
Utilizando o pacote express, crie um sistema para essa loja onde seja possível:

- Buscar todos os veículos disponíveis (GET)
- Buscar um veículo específico através do ID (GET by ID)
- Cadastrar um novo veículo na loja (POST)
- Atualizar os dados de um veículo através do ID (PUT)
- Excluir um veículo vendido através do ID (DELETE)
*/

const express = require('express')
const app = express()

app.use(express.json())

const carros = []

app.get('/concessionaria', (requisicao, resposta) => {
    resposta.status(200).send(carros)
})

app.get('/concessionaria/:id', (requisicao, resposta) => {
    const id = requisicao.params.id
    const encontrarCarro = carros.find(carro => carro.id == id)
    resposta.status(200).send(encontrarCarro)
})
app.post('/concessionaria', (requisicao, resposta) => {
    const carroNovo = requisicao.body
    carros.push(carroNovo)
    resposta.status(200).send('Carro cadastrado com sucesso!')
})
app.put('/concessionaria/:id', (requisicao, resposta) => {
    const id = requisicao.params.id
    const encontrarCarro = carros.findIndex(carro => carro.id == id)
    if(encontrarCarro > -1){
        const carroAtualizado = requisicao.body
        carros[encontrarCarro] = carroAtualizado
        resposta.status(200).send('Carro atualizado com sucesso!')
    }else{
        resposta.status(404).send('Id do carro não encontrado!')
    }
})

app.delete('/concessionaria/:id', (requisicao, resposta) => {
    const id = requisicao.params.id
    const encontrarCarro = carros.findIndex(carro => carro.id == id)
    if(encontrarCarro > -1 ){
        carros.splice(encontrarCarro, 1)
        resposta.status(200).send('Carro vendido com sucesso!')
    }else{
        resposta.status(404).send('Não temos este carro no estoque!')
    }
})

app.listen(3000, () => {
    console.log('SERVIDOR DA PORTA 3000 ABERTO!')
})