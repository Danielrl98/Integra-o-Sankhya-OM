const http = require('http');
const cors = require('cors')
const express = require('express')
const router = express()
router.use(cors())
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
require('dotenv').config();

/*var app = require('./src/Router/index.js');

app.listen('3030', function () {
    console.log('http://localhost:3030');
});*/


const server = http.createServer((req,res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    const data = {
        teste:'teste'
    }
    res.end(JSON.stringify(data))
});
  
const port = 3000; 
/*const host = '192.168.1.3'; */
const host = '3.228.59.191'
  
server.listen(port, host, () => {
    console.log(`Servidor está ouvindo em http://{$host}:${port}/`);
});
  








