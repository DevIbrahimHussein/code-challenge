const mongoose = require('mongoose')
const Address = require('./address.model')
const item = require('./item.model')

const restaurantSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },

    address: {
        type: mongoose.Schema.ObjectId,
        ref: Address
    },

    menu: {
        type: mongoose.Schema.ObjectId,
        ref: item
    }

})

module.exports = mongoose.model('Restaurant', restaurantSchema)