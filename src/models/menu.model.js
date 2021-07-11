const mongoose = require('mongoose')
const item = require('./item.model')
const category = require('./category.model')

const menuSchema = mongoose.Schema({

    items: [
        {
            type: Schema.ObjectId,
            ref: item
        }
    ],

    categories: [
        {
            type: Schema.ObjectId,
            ref: category
        }
    ]
    
}, {
    versionKey: false
})

module.exports = mongoose.model('Menu', menuSchema)