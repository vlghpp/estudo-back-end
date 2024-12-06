import livro from '../models/Livro.js'
import { autor } from '../models/Autor.js'
import NaoEncontrado from '../erros/NaoEncontrado.js'
class LivroController{


    static async getBooks(req, res, next){
        try{
            const livros = await livro.find({})
            res.status(200).json(livros)
        }catch (error){
            next(error)
        }
    }

    static async getBookId(req, res, next){
        try{
            const id = req.params.id
            const bookFounded = await livro.findById(id)
            if(bookFounded !== null){
                res.status(200).send(bookFounded)
            }else{
                new next(NaoEncontrado("ID DO LIVRO NÃO LOCALIZADO!"))
            }
        }catch(error){
            next(error)
        }
    }

    static async getBookFilter(req, res, next){
        const { publisher, tittle }= req.query
        const regex = new RegExp(tittle, "i")

        const search = {}

        if(publisher) search.publisher = publisher
        if(tittle) search.tittle = regex
        try{
            const booksForPublisher = await livro.find(search)
            res.status(200).send(booksForPublisher)
        }catch(error){
            next(error)
        }
    }
    
    static async sendBook(req, res, next){
        const newLivro = req.body
        try{
            //faz conexão das coleçãoes livros e autores
            //pega o novo livro, e faz uma atualização com o autor que é encontrado passado pelo id do autor
            const authorFounded = await autor.findById(newLivro.author)
            if(authorFounded !== null){
                const bookCompleted = { ...newLivro, autor: {...authorFounded._doc}}
                const boookCreated = await livro.create(bookCompleted)
                res.status(201).json({
                    message: "CRIADO COM SUCESSO!",
                    book: boookCreated
                })
            }else{
                new next(NaoEncontrado("ID DO LIVRO NÃO ENCONTRADO!"))
            }
            
        }catch(error){
            next(error)
        }
    }

    static async updateBook(req, res, next){
        try{
            const id = req.params.id
            const bookUpdated = await livro.findByIdAndUpdate(id, req.body)
            if(bookUpdated !== null){
                res.status(200).json({
                    message: "LIVRO ATUALIZADO COM SUCESSO!"
                })
            }else{
                new next(NaoEncontrado("ID DO LIVRO NÃO ENCONTRADO!"))
            }
            
        }catch(error){
            next(error)
        }
    }
    
    static async deleteBook(req, res, next){
        try{
            const id = req.params.id
            const bookDeleted = await livro.findByIdAndDelete(id)
            if(bookDeleted !== null){
                res.status(200).json({
                    message: "LIVRO REMOVIDO COM SUCESSO!"
                })
            }else{
                new next(NaoEncontrado("ID DO LIVRO NÃO ENCONTRADO!"))
            }
        }catch(error){
            next(error)
        }
    }
}

export default LivroController

