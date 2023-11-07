const fs = require('fs');
const https = require('https');
var router = require('./src/Router/index.js');

require('dotenv').config();

const host = process.env.IP; 

if(process.env.ENVIRONMENT == 'PRODUCTION'){

    var options = {
        key: fs.readFileSync('/','utf-8'),
        cert: fs.readFileSync('/','utf-8')
    };
    
    var httpsServer = https.createServer(options, router);

    httpsServer.listen('3020', function () {
        console.log(`http://${host}:3020`);
    });
    
} 
router.listen('3030', function () {
    console.log(`http://${host}:3030`);
});











