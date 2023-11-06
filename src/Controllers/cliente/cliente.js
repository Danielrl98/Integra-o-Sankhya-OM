const url_consulta = "https://api.sankhya.com.br/gateway/v1/mge/service.sbr?serviceName=CRUDServiceProvider.loadRecords&outputType=json";

const url_cadastro = "https://api.sankhya.com.br/gateway/v1/mge/service.sbr?serviceName=CRUDServiceProvider.saveRecord&outputType=json";

module.exports = {

    queryClient(req, res, bearerToken) {


        if (!req.query.cpf) {
            res.send([
                { error: 'CPF não retornado' },
                statusErrorVoid
            ])
        }
        if (!req.query.nome) {
            res.send([
                { error: 'nome do cliente não retornado' },
                statusErrorVoid
            ])
        }


        const cpfCliente = req.query.cpf
        const nomeDoCliente = (req.query.nome).replaceAll('%', ' ').toUpperCase()

        this.queryClienteFetch(res, req, cpfCliente, bearerToken, nomeDoCliente)

    },
    async queryClienteFetch(res, req, cpf, bearerToken, nome) {

        const body = {
            "serviceName": "CRUDServiceProvider.loadRecords",
            "requestBody": {
                "dataSet": {
                    "rootEntity": "Parceiro",
                    "includePresentationFields": "N",
                    "offsetPage": "0",
                    "criteria": {
                        "expression": {
                            "$": `CGC_CPF = '${cpf}'`
                        }
                    },
                    "entity": {
                        "fieldset": {
                            "list": "CODPARC,NOMEPARC,FORNECEDOR,CLIENTE,CODCID,CLIENTE,CLASSIFICMS"
                        }
                    }
                }
            }
        }

        /*   try{*/

        const result = await fetch(url_consulta, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                'Authorization': `Bearer ${bearerToken}`,
                'Content-Type': 'application/json',
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(body),
        })

        const success = await result.json()

        const total = success.responseBody.entities.total

        if (total.toString() == 0) {
            this.registerClient(res, req, cpf, bearerToken, nome)

        } else {

            const entity = success.responseBody.entities.entity

            if (Array.isArray(entity)) {
                const id_client = entity[0].f0.$
                dados.push({ cliente: id_client })

            } else {
                const id_client = entity.f0.$
                dados.push({ cliente: id_client })
            }


        }
        /* }*/
        /*  catch(e){
              const error =  [
                  {consultaCliente:e},
                  status404
              ]
              console.log(error)
              res.send(error)
          }*/
    },
    async registerClient(res, req, cpf, bearerToken, nome) {


        console.log(cpf)

        const body = {
            "serviceName": "CRUDServiceProvider.saveRecord",
            "requestBody": {
                "dataSet": {
                    "rootEntity": "Parceiro",
                    "includePresentationFields": "S",
                    "dataRow": {
                        "localFields": {
                            "TIPPESSOA": {
                                "$": "F"
                            },
                            "NOMEPARC": {
                                "$": `${nome}`
                            },
                            "CODCID": {
                                "$": "10"
                            },
                            "ATIVO": {
                                "$": "S"
                            },
                            "CLIENTE": {
                                "$": "S"
                            },
                            "CLASSIFICMS": {
                                "$": "C"
                            },
                            "CGC_CPF": {
                                "$": cpf
                            }
                        }
                    }, "entity": {
                        "fieldset": {
                            "list": "CODPARC,TIPPESSOA,NOMEPARC,CODCID,ATIVO,CLIENTE,CLASSIFICMS"
                        }
                    }
                }
            }
        }

        const result = await fetch(url_cadastro, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                'Authorization': `Bearer ${bearerToken}`,
                'Content-Type': 'application/json',
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(body),
        })

        const success = await result.json()

        const id_client = success.responseBody.entities.entity.CODPARC.$
        dados.push({ cliente: id_client })
        
    }



}