interface Header{
    
        token?:any,
        appkey?:any,
        username?:any,
        password?:any,
}

class Api {

    bearerToken:string

    async authenticate(req, res) {

        const response = []
        const url = 'https://api.sankhya.com.br/login'

        const headers = {
            token: process.env.TOKEN,
            appkey: process.env.APPKEY,
            username: process.env.USER,
            password: process.env.PASS
        }

        const result = await fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers,
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify({}),
        });

        const status = result.status;

        const success = await result.json();

        if (status.toString() !== '200') {
            return res.send({ error: success })
        }

        this.bearerToken = success.bearerToken

        response.push(this.bearerToken)

        return res.send(response)
    }
}
module.exports = { Api } 