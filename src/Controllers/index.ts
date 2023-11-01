const Classe  = require('./authenticate.ts')

module.exports = {


         requestApi(req,res){

            const api = new Classe()
            api.authenticate(req,res)

           /* const t = req.query.t
            console.log(t)*/

        }
}