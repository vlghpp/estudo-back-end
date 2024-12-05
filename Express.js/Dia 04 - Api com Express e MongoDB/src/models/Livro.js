import mongoose from "mongoose"

const livroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    titulo: {type: String, required: true},
    editora: {type: String},
    paginas: {type: Number},
    preco: {type:Number}
}, {versionKey: false})

//model("referencia a coleção no mongoDB", "modelo que um livro deve ter para ser incluido na coleção")
const livro = mongoose.model("livros", livroSchema)

export default livro