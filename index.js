require('dotenv').config()
const { router }  = require('./src/Router/index')



router.listen('3030', () => {
    console.log('http://localhost:3030')
})