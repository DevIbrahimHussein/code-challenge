const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller.js')
const addressController = require('../controllers/address.controller')
const middleware = require('../middlewares/middleware.js')

// ======================================================== User End Points ==============================================================
router.post('/login', 
    userController.login
)

router.post('/signup')

router.post('/active')

router.put('/update/:userId')

// =======================================================  Restaurants End Points =================================================================

router.get('/restaurants',
    addressController.getAddresses,
    middleware.dataHandler
)

router.post('/restuarant')

router.put('/restaurant/:restaurantId')

router.delete('/restaurant/:restaurantId')

// ===================================================== Addresses End Points =====================================================================

router.get('/addresses',
    addressController.getAddresses,
    middleware.dataHandler
)

router.post('/address',
    addressController.addAddress,
    middleware.dataHandler
)

router.put('/address/:addressId',
    addressController.updateAddress,
    middleware.dataHandler
)

router.delete('/address/:addressId',
    addressController.removeAddress,
    middleware.dataHandler
)

// ==================================================== Categories End Points =======================================================================

router.get('/categories')

router.post('/category')

router.put('/category/:categoryId')

router.delete('/category/:categoryId')

// ====================================================== Items End Points ======================================================================

router.get('/items')

router.post('/item')

router.put('/item/:itemId')

router.delete('/item/:itemId')

// ==============================================================================================================================

module.exports = router