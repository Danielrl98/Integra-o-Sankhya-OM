const http = require('http');
const cors = require('cors')
const express = require('express')
const router = express()
const fs = require('fs');
router.use(cors())
const https = require('https');

require('dotenv').config();

const host = '10.0.2.168'; 

var app = require('./src/Router/index.js');

const privateKey = fs.readFileSync('/etc/letsencrypt/live/universidade.sankhya.com.br/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/universidade.sankhya.com.br/cert.pem', 'utf8');

const credentials = { key: privateKey, cert: certificate };

// Crie um servidor HTTPS


router.get('/teste2',(req,res) => {
	res.send({teste:'teste2'})
})
https.createServer(credentials, app).listen('3030',host, function () {
    console.log(`http://${host}:3030`);
});


/*const server = http.createServer((req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    const data = {
        teste:'teste'
    }
    res.end(JSON.stringify(data))
});

const port = 3000; */

/*const host = '3.228.59.191'*/


/*server.listen(port, host, () => {
    console.log(`Servidor está ouvindo em http://{$host}:${port}/`);
});*/
  








