const fs = require("fs")

function getTodosLivros(){
    return JSON.parse(fs.readFileSync("livros.json"))
}

function insertBook(newBook){
    const books = getTodosLivros()
    fs.writeFileSync("livros.json", JSON.stringify([...books, newBook]))
}

function modifyBook(modifications, id){
    let currentBooks = JSON.parse(fs.readFileSync("livros.json"))
    const indexModify = currentBooks.findIndex(element => element.id === id)
    /*
        Cria dois objetos diferentes
        - ...currentBooks[indexModify]
        - ...modifications
        Compara as chaves de cada um e caso exista alguma que não coexista nas duas ele criara um novo objeto com a junção das duas
        Neste caso, esse objeto é contentModify
    
    */
    const contentModify = {...currentBooks[indexModify], ...modifications}
    currentBooks[indexModify] = contentModify
    fs.writeFileSync("livros.json", JSON.stringify(currentBooks))
}


module.exports = {
    getTodosLivros, insertBook, modifyBook
}