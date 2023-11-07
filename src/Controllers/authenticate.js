const { dados } = require('./variaveis')
require('dotenv').config();
const axios = require('axios')

module.exports = {

    async authenticate() {
        try {

            const url = 'https://api.sankhya.com.br/login'

            /* const headers = {
                 token: process.env.TOKEN,
                 appkey: process.env.APPKEY,
                 username: process.env.USER,
                 password: process.env.PASS
             }
         
             const result = await fetch(url, {
                 method: "POST",
                 mode: "no-cors",
                 cache: "no-cache",
                 credentials: "same-origin",
                 headers,
                 redirect: "follow",
                 referrerPolicy: "no-referrer",
                 body: JSON.stringify({}),
             })
         
             const status = result.status;
             const success = await result.json();*/

            axios.defaults.headers.common['token'] = process.env.TOKEN
            axios.defaults.headers.common['appkey'] = process.env.APPKEY
            axios.defaults.headers.common['username'] = process.env.USER
            axios.defaults.headers.common['password'] = process.env.PASS

            const result = await axios.post(url)

            const token =  (result.data).bearerToken

            dados.push({ bearerToken: token })
        }
        catch (e) {
            const error = [
                { authenticacao: e },
                status404
            ]
            console.log(error)
            return JSON.stringify(error)

        }
    }

}