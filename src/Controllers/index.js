const { Api } = require('./authenticate')

module.exports = {


         requestApi(req,res){

            const api = new Api()
            api.authenticate(req,res)

           /* const t = req.query.t
            console.log(t)*/

        }
}