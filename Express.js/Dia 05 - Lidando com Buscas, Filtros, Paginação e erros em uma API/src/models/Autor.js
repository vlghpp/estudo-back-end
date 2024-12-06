import mongoose from "mongoose"

const autorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId},
    nome: {type: mongoose.Schema.Types.String, required: [true, "O nome do autor(a) é obrigatório!"]},
    nacionalidade: {type: mongoose.Schema.Types.String} 
}, {versionKey: false})

const autores = mongoose.model("autores", autorSchema)


//importa autor para usar como tipo em Livro
export { autores, autorSchema }