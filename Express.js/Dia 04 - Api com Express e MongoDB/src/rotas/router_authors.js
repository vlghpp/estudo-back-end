import { Router } from 'express'
import AuthorController from "../controladores/controller_author.js"
const router_authors = Router()

//getBooks é uma função que vai ser executada la na pasta controladores
router_authors.get('/', AuthorController.getBooks)
router_authors.get('/:id', AuthorController.getBookId)
router_authors.post('/sendauthor', AuthorController.sendBook)
router_authors.patch('/updateauthor/:id', AuthorController.updateBook)
router_authors.delete('/deleteauthor/:id', AuthorController.deleteBook)

export default router_authors

