const mongoose = require('mongoose')

const addressSchema = mongoose.Schema({
    label: {
        type: String,
        require: true
    },
    completeAddress: {
        type: String,
        require: true
    },
    Xcoordinates: {
        type: String,
        require: true
    },
    Ycoordinates: {
        type: String,
        require: true
    }
}, {
    versionKey: false
})

module.exports = mongoose.model('Address', addressSchema)