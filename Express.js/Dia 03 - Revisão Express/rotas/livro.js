const { Router } = require("express")
const { getLivros, getLivrosId, sendBooks, updateBook, deleteBook } = require('../controladores/livro.js')
const router = Router()

router.get("/", getLivros)
router.get("/:id", getLivrosId)
router.post("/", sendBooks)
router.patch("/:id", updateBook)
router.delete("/:id", deleteBook)

module.exports = router