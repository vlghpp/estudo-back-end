import livro from '../models/Livro.js'
import { autor } from '../models/Autor.js'
class LivroController{


    static async getBooks(req, res){
        try{
            const livros = await livro.find({})
            res.status(200).json(livros)
        }catch (error){
            res.status(500).json({
                message: `${error.message} - ERRO INTERNO DO SERVIDOR`
            })
        }
    }

    static async getBookId(req, res){
        try{
            const id = req.params.id
            const bookFounded = await livro.findById(id)
            res.status(200).send(bookFounded)
        }catch(error){
            res.status(500).json({
            message: `${error.message} - ERRO INTERNO DO SERVIDOR`
        })
        }
    }

    static async getBookPublisher(req, res){
        const publisher = req.query.publisher
        try{
            const booksForPublisher = await livro.find({editora: publisher})
            res.status(200).send(booksForPublisher)
        }catch(error){
            res.status(500).json({
            message: `${error.message} - ERRO INTERNO DO SERVIDOR`
        })
        }
    }
    
    static async sendBook(req, res){
        const newLivro = req.body
        try{
            const authorFounded = await autor.findById(newLivro.author)
            //faz conexão das coleçãoes livros e autores
            //pega o novo livro, e faz uma atualização com o autor que é encontrado passado pelo id do autor
            const bookCompleted = { ...newLivro, autor: {...authorFounded._doc}}
            const boookCreated = await livro.create(bookCompleted)
            res.status(201).json({
                message: "CRIADO COM SUCESSO!",
                book: boookCreated
            })
        }catch(error){
            res.status(500).json({
            message: `${error.message} - ERRO INTERNO DO SERVIDOR`
        })
        }
    }

    static async updateBook(req, res){
        try{
            const id = req.params.id
            await livro.findByIdAndUpdate(id, req.body)
            res.status(200).json({
                message: "LIVRO ATUALIZADO COM SUCESSO!"
            })
        }catch(error){
            res.status(500).json({
            message: `${error.message} - ERRO INTERNO DO SERVIDOR`
        })
        }
    }
    
    static async deleteBook(req, res){
        try{
            const id = req.params.id
            await livro.findByIdAndDelete(id)
            res.status(200).json({
                message: "LIVRO REMOVIDO COM SUCESSO!"
            })
        }catch(error){
            res.status(500).json({
            message: `${error.message} - ERRO INTERNO DO SERVIDOR`
        })
        }
    }
}

export default LivroController

