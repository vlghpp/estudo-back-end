import mongoose from "mongoose"
import { autorSchema } from "./Autor.js"
const livroSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    titulo: {
        type: String,
        required: [true, "É obrigatório o livro ter um título!"]
    },
    editora: {
        type: String, 
        required:[true, "É obrigatório o livro ter sua editora!"], 
        enum:{
            //valores permitidos para o campo editora
            values: ["Casa do código", "Alura"],
            //mensagem que vai aparecer caso o campo de editora não for valido
            message: "A editora {VALUE} fornecida não é um valor permitido"
        }
    },
    paginas: {
        type: Number, 
        min: [10, "O número {VALUE} de páginas extrapola o minímo. 10 - 5000"], 
        max: [5000, "O número {VALUE} de páginas extrapola o máximo. 10 - 5000"]
    },
    preco: {
        type:Number
    },
    autor: autorSchema
}, {versionKey: false})

//model("referencia a coleção no mongoDB", "modelo que um livro deve ter para ser incluido na coleção")
const livro = mongoose.model("livros", livroSchema)

export default livro