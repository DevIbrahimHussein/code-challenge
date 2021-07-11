const express = require('express')
const router = express.Router()

const controller = require('../controllers/user.controller.js')
// const middleware = require('./middleware/midllewares')

router.post('/login', 
    controller.login
)

module.exports = router