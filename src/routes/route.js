const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller.js')
const addressController = require('../controllers/address.controller')
const categoriesController = require('../controllers/category.controller')
const itemController = require('../controllers/item.controller')
const restaurantController = require('../controllers/restaurant.controller')
const orderController = require('../controllers/order.controller')
const middleware = require('../middlewares/middleware.js')

// ======================================================== User End Points ==============================================================
router.post('/login', 
    userController.login,
    middleware.dataHandler
)

router.post('/signup',
    userController.signup,
    middleware.dataHandler
)

router.post('/active',
    middleware.verifyToken,
    middleware.verifyAdmin,
    userController.setUserActivity
)

router.put('/update/:userId',
    middleware.verifyToken,
    userController.updateUser,
    middleware.dataHandler
)

// =======================================================  Restaurants End Points =================================================================

router.get('/restaurants',
    middleware.verifyToken,
    middleware.verifyAdmin,
    restaurantController.listRestaurants,
    middleware.dataHandler
)

router.post('/restuarant',
    middleware.verifyToken,
    middleware.verifyAdmin,
    restaurantController.addRestaurant,
    middleware.dataHandler
)

router.put('/restaurant/:restaurantId',
    middleware.verifyToken,
    middleware.verifyAdmin,
    restaurantController.updateRestaurant,
    middleware.dataHandler
)

router.delete('/restaurant/:restaurantId',
    middleware.verifyToken,
    middleware.verifyAdmin,
    restaurantController.removeRestaurant,
    middleware.dataHandler
)

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

router.get('/categories',
    middleware.verifyToken,
    middleware.verifyAdmin,
    categoriesController.getCategories,
    middleware.dataHandler
)

router.post('/category',
    middleware.verifyToken,
    middleware.verifyAdmin,
    categoriesController.addCategory,
    middleware.dataHandler
)

router.put('/category/:categoryId',
    middleware.verifyToken,
    middleware.verifyAdmin,
    categoriesController.updateCategory,
    middleware.dataHandler
)

router.delete('/category/:categoryId',
    categoriesController.removeCategory,
    middleware.dataHandler
)

// ====================================================== Items End Points ======================================================================

router.get('/items',
    middleware.verifyToken,
    middleware.verifyAdmin,
    itemController.listItems,
    middleware.dataHandler
)

router.post('/item',
    middleware.verifyToken,
    middleware.verifyAdmin,
    itemController.addItem,
    middleware.dataHandler
)

router.put('/item/:itemId',
    middleware.verifyToken,
    middleware.verifyAdmin,
    itemController.updateItem,
    middleware.dataHandler
)

router.delete('/item/:itemId',
    middleware.verifyToken,
    middleware.verifyAdmin,
    itemController.deleteItem,
    middleware.dataHandler
)

// ========================================================== Order End Points ====================================================================

router.get('/orders',
    orderController.listOrders,
    middleware.dataHandler
)

router.post('/order',
    middleware.verifyToken,
    orderController.createOrder,
    middleware.dataHandler
)

router.put('/order/:orderId',
    middleware.verifyToken,
    orderController.updateOrder,
    middleware.dataHandler
)

router.get('/order/:orderId',
    middleware.verifyToken,
    orderController.modifyStatus,
    middleware.dataHandler
)

router.get('/cancel/:orderId',
    middleware.verifyToken,
    orderController.cancelOrder,
    middleware.dataHandler
)

// ==============================================================================================================================

module.exports = router