const { getItems, createItemModel, saveItem, updateItemById, removeItemById } = require("../services/item.service")
const { extractItemQueryParameters } = require("../utils/app.utils")

exports.listItems = async(req, res, next) => {

    const { filter, skip, limit } = extractItemQueryParameters(req.query, req.params)
    
    req.data = await getItems(filter, skip, limit)
    next()

}

exports.addItem = async(req, res, next) => {

    const itemModel = await createItemModel(req.body)
    req.data = await saveItem(itemModel)
    next()

}

exports.updateItem = async(req, res, next) => {
    
    req.data = await updateItemById(req.params.itemId, req.body)
    next()

}

exports.deleteItem = async(req, res, next) => {
    
    req.data = await removeItemById(req.params.itemId)
    next()

}