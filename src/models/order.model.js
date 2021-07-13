const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({

    items: [
        {
            
        }
    ]
    
}, {
    versionKey: false
})

module.exports = mongoose.model('Item', itemSchema)