const model = require('../models/category.model')

module.exports = {

    createCategoryModel(address){
        return new model(address)
    },

    allCategories(){
        return model.find()
    },

    deleteCategoryById(categoryId){
        return model.findByIdAndDelete(categoryId)
    },

    updateCategoryById(categoryId, category){
        return model.findByIdAndUpdate(
            categoryId,
            category
        )
    }

}