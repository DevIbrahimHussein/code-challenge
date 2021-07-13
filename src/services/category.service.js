const model = require('../models/category.model')

module.exports = {

    createCategoryModel(category){
        return new model(category)
    },

    insertCategory(category){
        return category.save()
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