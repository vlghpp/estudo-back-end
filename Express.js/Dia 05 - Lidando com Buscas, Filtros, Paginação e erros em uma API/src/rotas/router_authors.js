import { Router } from 'express'
import AuthorController from "../controladores/controller_author.js"
import paginar from '../middlewares/paginar.js'
const router_authors = Router()

//getBooks é uma função que vai ser executada la na pasta controladores
router_authors.get('/', AuthorController.getAuthors, paginar)
router_authors.get('/:id', AuthorController.getAuthorId)
router_authors.post('/sendauthor', AuthorController.sendAuthor)
router_authors.patch('/updateauthor/:id', AuthorController.updateAuthor)
router_authors.delete('/deleteauthor/:id', AuthorController.deleteAuthor)

export default router_authors

