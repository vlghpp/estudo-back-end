import livro from '../models/Livro.js'

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
    
    static async sendBook(req, res){
        try{
            const newLivro = await livro.create((req.body))
            res.status(201).json({
                message: "CRIADO COM SUCESSO!",
                book: newLivro
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

