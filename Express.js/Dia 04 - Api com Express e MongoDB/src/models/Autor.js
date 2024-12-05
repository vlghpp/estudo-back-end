import mongoose from "mongoose"

const autorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId},
    nome: {type: mongoose.Schema.Types.String},
    nacionalidade: {type: mongoose.Schema.Types.String} 
}, {versionKey: false})

const autor = mongoose.model("autores", autorSchema)


//importa autor para usar como tipo em Livro
export { autor, autorSchema}