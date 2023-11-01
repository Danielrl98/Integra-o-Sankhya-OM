const express = require('express')
const router = express()
const controller = require('../Controllers/index')
const cors = require('cors')
router.use(cors())

router.get('/',controller.requestApi)


module.exports = { router }