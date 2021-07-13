const { allRestaurant, createRestaurantModel, saveRestaurant, updateRestaurantById, deleteRestaurantById } = require("../services/restaurant.service")

exports.listRestaurants = async(req, res, next) => {

    req.data = await allRestaurant()
    next()

}

exports.addRestaurant = async(req, res, next) => {

    const model = await createRestaurantModel(req.body)
    req.data = await saveRestaurant(model)
    next()

}

exports.updateRestaurant = async(req, res, next) => {

    req.data = await updateRestaurantById(req.params.restaurantId, req.body)
    next()

}


exports.removeRestaurant = async(req, res, next) => {

    req.data = await deleteRestaurantById(req.params.restaurantId)
    next()
    
}