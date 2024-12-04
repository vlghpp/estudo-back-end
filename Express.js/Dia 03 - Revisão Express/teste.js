const { log } = require('console');
const fs = require('fs')


// para ler um arquivo fs.ReadFileSync("caminho do arquivo")
//console.log(JSON.parse(fs.readFileSync("livros.json")));


// para escrever em um arquivo fs.writeFileSync("caminho do arquivo", "o que você quer escrever no arquivo")

const dataJson = JSON.parse(fs.readFileSync("livros.json"))
console.log(dataJson);

const newData = {id: 4, nome: 'teste'}



console.log(fs.writeFileSync("livros.json",JSON.stringify([...dataJson, newData])));



