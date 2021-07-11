const mongoose = require('mongoose')
const Address = require('./address.model')
const restaurantSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },

    coordinates: {
        type: mongoose.Schema.ObjectId,
        ref: Address
    }

})

module.exports = mongoose.model('Restaurant', restaurantSchema)