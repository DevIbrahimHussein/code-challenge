const express = require('express')
const router = express.Router()

const controller = require('../controllers/user.controller.js')
// const middleware = require('./middleware/midllewares')

// ======================================================================================================================
router.post('/login', 
    controller.login
)

router.post('/signup')

router.post('/active')

router.put('/update/:userId')



module.exports = router