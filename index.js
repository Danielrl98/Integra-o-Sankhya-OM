require('dotenv').config();
var router = require('./src/Router/index').router;
router.listen('3030', function () {
    console.log('http://localhost:3030');
});
