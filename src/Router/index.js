const express = require('express')
const router = express()
const controller = require('../Controllers/index.js')
const cors = require('cors')

router.use(cors())
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.get('/',controller.requestApi)
router.get('/teste',(req,res) => {
    res.send({teste:'teste'})
})




module.exports =  router 