require('dotenv').config();
var app = require('./src/Router/index.ts');
app.listen('3030', function () {
    console.log('http://localhost:3030');
});
