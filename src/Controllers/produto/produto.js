
module.exports = {
    requestProduto(req, res) {

        if (!req.query.produto) {
            res.send([
                { error: 'produto não retornado' },
                statusErrorVoid
            ])
        }
        const produto = (req.query.produto).replaceAll('%', ' ').toLowerCase()

        console.log(produto)

        if (produto == 'formacao backoffice') {
            dados.push({
                'produto': '51173',
                'preco': '2497.00'
            })
        }
        else if (produto == 'gestao de compras') {

            dados.push({
                'produto': '51130',
                'preco': '999.00'
            })
        }
        else if (produto == 'gestao de estoque') {

            dados.push({
                'produto': '51132',
                'preco': '999.00'
            })

        }
        else if (produto == 'gestao de vendas') {

            dados.push({
                'produto': '51133',
                'preco': '999.00'
            })

        }
        else if (produto == 'gestao da distribuição') {

            dados.push({
                'produto': '51134',
                'preco': '999.00'
            })

        }
        else if (produto == 'gestao de financeira') {

            dados.push({
                'produto': '51135',
                'preco': '999.00'
            })
        }
        else {
            dados.push({
                'produto': '51135',
                'preco': '999.00',
                'message':'produto não cadastrado, ou com acentos'
            })
        }
    }
}