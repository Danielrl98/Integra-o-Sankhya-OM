const authenticate = require('./authenticate')
const cliente = require('./cliente/cliente')
const produto = require('./produto/produto')
const pagamento = require('./pagamento/pagamento')
const { status404 } = require('./variaveis')


authenticate.authenticate()

const time = 900

function execControllers(req, res) {

    const error = []

    if (!req.query.cpf) {
        error.push(
            { error: 'CPF não retornado' },
        )
    }
    if (!req.query.nome) {
        error.push(
            { error: 'nome do cliente não retornado' },
        )
    }
    if (!req.query.produto) {
        error.push(
            { error: 'produto não retornado' },
        )
    }
    if (!req.query.pagamento) {
        error.push(
            { error: 'Forma de pagamento não retornada' },
        )
    }
    if (error.length !== 0) {
        return res.send({error, status:statusErrorVoid})
    }


    setTimeout(() => {

        try {
            if (dados[1].bearerToken) {
                const bearerToken = dados[1].bearerToken

                produto.requestProduto(req, res)
                pagamento.requestPayment(req, res)

                cliente.queryClient(req, res, bearerToken)

                setTimeout(() => {

                    return res.send(dados)

                }, time)
            }
        }
        catch (e) {
            res.send([
                { error: 'token não existe ' + e },
                status404
            ])
        }

    }, time)
}

module.exports = {


    requestApi(req, res) {

        execControllers(req, res)
    },

}