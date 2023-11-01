const { Api } = require('./authenticate')

module.exports = {


         requestApi(req,res){

            const api = new Api(req,res)


           /* const t = req.query.t
            console.log(t)*/

        }
}