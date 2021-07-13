const mongoose = require('mongoose')
const category = require('./category.model')

const itemSchema = mongoose.Schema({

    name: {
        type: String
    }
    
}, {
    versionKey: false
})

module.exports = mongoose.model('Item', itemSchema)