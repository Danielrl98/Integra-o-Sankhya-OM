require('dotenv').config()
const app  = require('./src/Router/index.ts')



app.listen('3030', () => {
    console.log('http://localhost:3030')
})