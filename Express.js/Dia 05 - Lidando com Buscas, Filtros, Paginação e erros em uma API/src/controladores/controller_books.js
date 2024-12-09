import livro from '../models/Livro.js'
import { autores } from '../models/Autor.js'
import NaoEncontrado from '../erros/NaoEncontrado.js'
class LivroController{


    static async getBooks(req, res, next){
        try{
            req.resultado = livro.find() //busca todos os livros sem await para armazenar em uma váriavel que pode ser utilizado em todos middlewares (req.resultado)
            next()
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
                next( new NaoEncontrado("ID DO LIVRO NÃO LOCALIZADO!"))
            }
        }catch(error){
            next(error)
        }
    }

    static async getBookFilter(req, res, next){
        try{
            const busca = await processSearch(req.query)

            if(busca !== null){
                if(busca.autor){
                    const bookResult = await livro.findById(busca.autor)
                    req.resultado = bookResult
                    next() //executa o middleware paginar
                    res.status(200).send(bookResult)
                }
                else{
                    const bookResult = await livro.find(busca).populate("autor")
                    req.resultado = bookResult
                    next()//executa o middleware paginar
                    res.status(200).send(bookResult)
                }
            }else{
                res.status(200).send([])
            }
            
        }catch(erro){
            next(erro)
        }
    }
    
    static async sendBook(req, res, next){
        const newLivro = req.body
        try{
            //faz conexão das coleçãoes livros e autores
            //pega o novo livro, e faz uma atualização com o autores que é encontrado passado pelo id do autores
            const authorFounded = await autores.findById(newLivro.autor)
            if(authorFounded !== null){
                const bookCompleted = { ...newLivro, autor: {...authorFounded._doc}}
                const boookCreated = await livro.create(bookCompleted)
                res.status(201).json({
                    message: "CRIADO COM SUCESSO!",
                    book: boookCreated
                })
            }else{
                next(new NaoEncontrado("ID DO LIVRO NÃO ENCONTRADO!"))
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
                    message: "LIVRO ATUALIZADO COM SUCESSO!",
                    updatedBook: bookUpdated
                })
            }else{
                next(new NaoEncontrado("ID DO LIVRO NÃO ENCONTRADO!"))
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
                next(new NaoEncontrado("ID DO LIVRO NÃO ENCONTRADO!"))
            }
        }catch(error){
            next(error)
        }
    }
}

async function processSearch(parametros){
    const { publisher, tittle, minPages, maxPages, authorName } = parametros

    let search = {}

    if(publisher) search.editora = publisher
    if(tittle) search.titulo = {$regex: tittle, $options: "i"}
    if(minPages || maxPages) search.numeroPaginas = {}
    if(minPages) search.numeroPaginas.$gte = minPages
    if(maxPages) search.numeroPaginas.$lte = maxPages
    if(authorName) {
        const authors = await autores.findOne({ nome: authorName })
        if(authors !== null){
            search.autor = authors._id
        }else{
            search = null
        }
    }

    console.log(search)
    return search
}

export default LivroController

