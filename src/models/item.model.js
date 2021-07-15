const mongoose = require('mongoose')
const category = require('./category.model')

const itemSchema = mongoose.Schema({

    name: {
        type: String,
        require: true
    },

    price: {
        type: Number,
        require: true
    },

    category: {
        type: mongoose.Schema.ObjectId,
        ref: category,
        require: true
    }
    
}, {
    versionKey: false
})

module.exports = mongoose.model('Item', itemSchema)