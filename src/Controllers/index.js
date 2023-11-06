const authenticate = require('./authenticate')
const cliente = require('./cliente/cliente')
const produto = require('./produto/produto')
const pagamento = require('./pagamento/pagamento')
const { status404 } = require('./variaveis')

authenticate.authenticate()

const time = 1000

function execControllers(req, res) {

    setTimeout(() => {

        try{
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
        catch(e){
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