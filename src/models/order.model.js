const mongoose = require('mongoose')
const Item = require('./item.model')

const itemSchema = mongoose.Schema({

    items: [
        {
            type: mongoose.Schema.ObjectId,
            ref: Item
        }
    ],

    status: {
        type: String,
        enum: ['pending','accept', 'reject'],
        default: 'pending',
        require: true
    }
    
}, {
    versionKey: false
})

module.exports = mongoose.model('Item', itemSchema)