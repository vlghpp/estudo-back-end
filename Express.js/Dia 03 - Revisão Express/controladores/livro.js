const fs = require('fs')
const { getTodosLivros, insertBook, modifyBook } = require('../serviço/livro.js')

function getLivros(req, res){
    try{
        const books = getTodosLivros()
        res.status(200).send(books)
    }catch (error){
        res.status(500).send(error.message)
    }
}

function getLivrosId(req, res) {
    try{
        const id = req.params.id

        if(id && Number(id)){
            const books = getTodosLivros()
            const book = books.find(element => element.id == id)
            if(book){
                res.status(200).send(book)
            }else{
                res.status(404).send("Livro não encontrado!")
            }
        }else{
            res.status(422).send("Dado enviado não é compativel!")
        }
        
    }catch(error){
        res.status(500).send(error.message)
    }
}

function sendBooks(req, res){
    try{
        const newBook = req.body
        insertBook(newBook)
        res.status(201).send("Livro adicionado com sucesso!")
    }catch (error){
        res.status(500).send(error.message)
    }
}

function updateBook(req, res){
    try{
        const id = req.params.id
        if(id && Number(id)){
            const books = getTodosLivros() 
            modifyBook(req.body, id)
            res.status(200).send("Livro atualizado com sucesso!")
        }else{
            res.status(422).send("Dado enviado não é compativel!")
        }
    }catch(error){
        res.status(500).send(error.message)
    }
}

function deleteBook(req, res){
    try{
        const id = req.params.id
        if(id && Number(id)){
            let books = getTodosLivros()
            const book = books.filter(element => element.id != id)
            fs.writeFileSync("livros.json", JSON.stringify(books = book))
            res.status(200).send("Livro deletado com sucesso!")
        }else{
            res.status(422).send("Dado enviado não é compativel!")
        }
    }catch (error){
        res.status(500).send(error.message)
    }
}
module.exports = {
    getLivros, sendBooks, updateBook, deleteBook, getLivrosId
}