const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    fullName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    active: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ['user','admin'],
        default: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date
    }
}, {
    versionKey: false
})

module.exports = mongoose.model('User', UserSchema)