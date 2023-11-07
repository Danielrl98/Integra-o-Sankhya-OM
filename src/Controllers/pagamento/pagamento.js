module.exports = {
    requestPayment(req,res){

        const forma = req.query.pagamento

        if(forma == 'A Vista Boleto'){
            dados.push({
                formaDePagamento: 70
            })
        }
        else if(  forma == 'PIX'){
           
            dados.push({
                formaDePagamento: 88
            })
        }
        else if(  forma == 'Cartão de Crédito'){
            dados.push({
                formaDePagamento: 78
            })
        }
        else if(  forma == 'Cartão de Crédito 02X'){
            dados.push({
                formaDePagamento: 79
            })
        }
        else if(  forma == 'Cartão de Crédito 03X'){
            dados.push({
                formaDePagamento: 80
            })
        }
        else if(  forma == 'Cartão de Crédito 04X'){
            dados.push({
                formaDePagamento: 80
            })
        }
        else {
            dados.push({
                formaDePagamento: 78
            })
        }
    }
}