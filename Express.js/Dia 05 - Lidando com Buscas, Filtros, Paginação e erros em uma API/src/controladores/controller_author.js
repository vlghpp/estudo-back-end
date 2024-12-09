import { autores } from "../models/Autor.js"
import NaoEncontrado from "../erros/NaoEncontrado.js"

class AuthorController{
    static async getAuthors(req, res, next){
        try{
            const authors =  autores.find()
            req.resultado = authors
            next()
        }catch (error){
            next(error)
        }
    }

    static async getAuthorId(req, res, next){
        try{
            const id = req.params.id
            const authorFounded = await autores.findById(id)

            if(authorFounded !== null){
                res.status(200).send(authorFounded)
            }else{
                next(new NaoEncontrado("ID DO AUTOR NÃO LOCALIZADO")) 
            }
        }catch(error){
            next(error)
        }
    }
    
    static async sendAuthor(req, res, next){
        try{
            const newAuthor = await autores.create((req.body))
            res.status(201).json({
                message: "CRIADO COM SUCESSO!",
                author: newAuthor
            })
        }catch(error){
            next(error)
        }
    }

    static async updateAuthor(req, res, next){
        try{
            const id = req.params.id
            const authorUpdated = await autores.findByIdAndUpdate(id, req.body)
            if(authorUpdated !== null){
                res.status(200).json({
                    message: "AUTOR ATUALIZADO COM SUCESSO!"
                })
            }else{
                next(new NaoEncontrado("ID DO AUTOR NÃO LOCALIZADO")) 
            }
            
        }catch(error){
            next(error)
        }
    }
    
    static async deleteAuthor(req, res, next){
        try{
            const id = req.params.id
           const authorDeleted = await autores.findByIdAndDelete(id)
           if (authorDeleted !== null){
                res.status(200).json({
                    message: "AUTOR REMOVIDO COM SUCESSO!"
                })
           }else{
                next(new NaoEncontrado("ID DO AUTOR NÃO LOCALIZADO")) 
           }
            
        }catch(error){
            next(error)
        }
    }
}

export default AuthorController

