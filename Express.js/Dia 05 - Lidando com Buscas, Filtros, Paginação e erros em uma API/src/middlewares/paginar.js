import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js"


async function paginar(req, res, next){
    //define um limite de dados que podem ser mostrados, interessante quando a base de dados é gigantesca
    try {
        let { limite = 5, pagina = 1, ordenacao = "_id:-1" } = req.query

        let [campoOrdenacao, ordem] = ordenacao.split(":") //define a separacao do campo que vai ser ordenado e em que ordem (crescente ou)

        limite = parseInt(limite)
        pagina = parseInt(pagina)
        ordem = parseInt(ordem)

        const resultado = req.resultado
        if(limite > 0 && pagina > 0){
            const resultadoPaginado = await resultado.find()
            .sort({[campoOrdenacao]: ordem}) //ordena de forma crescente {chave que quer ordenar: 1 - para crescente / 2 - para descrecente}
            .skip((pagina - 1) * limite)
            .limit(limite)
            .exec()
            res.status(200).json(resultadoPaginado)
    }else{
        next(new RequisicaoIncorreta())
    }
    } catch (erro) {
        next(erro)
    }
}

export default paginar