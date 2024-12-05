import { Router } from 'express'
import AuthorController from "../controladores/controller_author.js"
const router_authors = Router()

//getBooks é uma função que vai ser executada la na pasta controladores
router.get('/', AuthorController.getBooks)
router.get('/:id', AuthorController.getBookId)
router.post('/sendauthor', AuthorController.sendBook)
router.patch('/updateauthor/:id', AuthorController.updateBook)
router.delete('/deleteauthor/:id', AuthorController.deleteBook)

export default router_authors

