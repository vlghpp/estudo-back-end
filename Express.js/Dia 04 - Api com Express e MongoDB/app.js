import "dotenv/config"
import express, { json } from 'express'
import { connectDataBase } from "./src/config/dbConnect.js"
import router from './src/rotas/router.js'
const app = express()

app.use(json())

const conexao = await connectDataBase()

// ---------------- CONEXÃO COM MONGODB ----------------
//conexao.on -> refere-se a uma função de evento, então quando acontecer algo que neste caso seria um erro ele printara na tela
conexao.on("error", (erro) => {
  console.error("Erro de conexão", erro)
})


//conexao.once -> refere-se a conexão com o banco (de abrir)

conexao.once("open", ()=>{
  console.log("Conexão com o banco feita com sucesso!")
})
// ----------------------------------------------------


//quando for rodado alguma rota get com /books ele vai rodar as rotas/router.js
app.use('/books', router)

const port = 6002

app.listen(port, ()=>{
console.log(`SERVIDOR RODANDO EM http://localhost:${port}`);
})