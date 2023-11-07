const express = require('express')
const router = express()
const controller = require('../Controllers/index.js')
const cors = require('cors')
const axios = require('axios')
router.use(cors())

router.get('/',controller.requestApi)

router.get('/teste', async(req,res) => {

    const url = 'https://api.sankhya.com.br/login'
        
    axios.defaults.headers.common['token'] = process.env.TOKEN
    axios.defaults.headers.common['appkey'] =  process.env.APPKEY
    axios.defaults.headers.common['username'] = process.env.USER
    axios.defaults.headers.common['password'] = process.env.PASS

    const result = await axios.post(url)
    
    res.send((result.data).bearerToken)
})




module.exports =   router