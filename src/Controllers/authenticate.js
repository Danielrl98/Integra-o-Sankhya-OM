const { dados } = require('./variaveis')

module.exports = {

    async authenticate(){
      /*  try {*/
    
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
            })
        
            const status = result.status;
        
            if (status.toString() == '200') {

                const success = await result.json();
               dados.push(
                { bearerToken: success.bearerToken }
            )   
            } else {
                console.log(result)
            }
          
           
       /* }
        catch(e){
            const error =  [
                {authenticacao:e},
                status404
            ]
            return JSON.stringify(error)
       
        }*/
    }

}