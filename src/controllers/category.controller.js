const { allCategories, insertCategory, createCategoryModel, updateCategoryById, deleteCategoryById } = require("../services/category.service")

exports.getCategories = async(req, res, next) => {

    req.data = await allCategories()
    next()

}

exports.addCategory = async(req, res, next) => {

    const categoryModel = await createCategoryModel(req.body)
    req.data = await insertCategory(categoryModel)
    next()

}

exports.updateCategory = async(req, res, next) => {

    req.data = await updateCategoryById(req.params.categoryId)
    next()

}


exports.removeCategory = async(req, res, next) => {

    req.data = await deleteCategoryById(req.params.categoryId)
    next()
    
}