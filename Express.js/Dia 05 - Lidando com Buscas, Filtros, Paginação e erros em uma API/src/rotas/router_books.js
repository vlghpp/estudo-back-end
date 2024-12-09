import { Router } from 'express'
import LivroController from "../controladores/controller_books.js"
import paginar from "../middlewares/paginar.js"
const router_books = Router()

//getBooks é uma função que vai ser executada la na pasta controladores
router_books.get('/', LivroController.getBooks, paginar)
router_books.get('/search', LivroController.getBookFilter, paginar)
router_books.post('/sendbook', LivroController.sendBook)
router_books.patch('/updatebook/:id', LivroController.updateBook)
router_books.delete('/deletebook/:id', LivroController.deleteBook)
router_books.get('/:id', LivroController.getBookId)


export default router_books

