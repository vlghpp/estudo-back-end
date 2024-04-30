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

