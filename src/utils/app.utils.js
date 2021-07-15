require('dotenv').config()
const jwt = require('jsonwebtoken')
const isEmpty = require('is-empty')

module.exports = {

    extractItemQueryParameters(query, params){

        const searchName = query.name
        const categoryId = query.category

        const skip = query.skip
        const limit = query.limit

        var filter= {}

        if(searchName)
            filter.name = { $regex: searchName, $options: "i" }
           
        if(categoryId) 
            filter.category = categoryId

        return { 
            filter,
            skip,
            limit
        }
        
    },

    verifyToken(token) {

        if(token == null || isEmpty(token)) return false
        
        const decoded = jwt.verify(token, process.env.JwtSECRET)
        return decoded
        
    }

}