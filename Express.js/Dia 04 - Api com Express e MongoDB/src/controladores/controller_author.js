import { autor } from "../models/Autor.js"

class AuthorController{
    static async getBooks(req, res){
        try{
            const authors = await autor.find({})
            res.status(200).json(authors)
        }catch (error){
            res.status(500).json({
                message: `${error.message} - ERRO INTERNO DO SERVIDOR`
            })
        }
    }

    static async getBookId(req, res){
        try{
            const id = req.params.id
            const authorFounded = await autor.findById(id)
            res.status(200).send(authorFounded)
        }catch(error){
            res.status(500).json({
                message: `${error.message} - ERRO INTERNO DO SERVIDOR`
            })
        }
    }
    
    static async sendBook(req, res){
        try{
            const newAuthor = await autor.create((req.body))
            res.status(201).json({
                message: "CRIADO COM SUCESSO!",
                author: newAuthor
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
            await autor.findByIdAndUpdate(id, req.body)
            res.status(200).json({
                message: "AUTOR ATUALIZADO COM SUCESSO!"
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
            await autor.findByIdAndDelete(id)
            res.status(200).json({
                message: "AUTOR REMOVIDO COM SUCESSO!"
            })
        }catch(error){
            res.status(500).json({
                message: `${error.message} - ERRO INTERNO DO SERVIDOR`
            })
        }
    }
}

export default AuthorController

