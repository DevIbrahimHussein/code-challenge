const model = require('../models/restaurant.model')

module.exports = {

    createRestaurantModel(restaurant){
        return new model(restaurant)
    },

    saveRestaurant(restaurant){
        return restaurant.save()
    },

    allRestaurant(){
        return model.find()
    },

    deleteRestaurantById(restaurantId){
        return model.findByIdAndDelete(restaurantId)
    },

    updateRestaurantById(restaurantId, restaurant){
        return model.findByIdAndUpdate(
            restaurantId,
            restaurant
        )
    }

}