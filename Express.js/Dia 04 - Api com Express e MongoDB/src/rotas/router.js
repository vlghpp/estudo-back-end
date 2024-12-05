import { Router } from 'express'
import LivroController from "../controladores/controler_books.js"
const router = Router()

//getBooks é uma função que vai ser executada la na pasta controladores
router.get('/', LivroController.getBooks)
router.get('/:id', LivroController.getBookId)
router.post('/sendbook', LivroController.sendBook)
router.patch('/updatebook/:id', LivroController.updateBook)
router.delete('/deletebook/:id', LivroController.deleteBook)

export default router

