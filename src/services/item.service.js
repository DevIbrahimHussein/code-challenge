const model = require('../models/item.model')

module.exports = {

    createItemModel(item){
        return new model(item)
    },

    saveItem(item){
        return item.save()
    },

    getItems(filter, skip, limit){
        return model
                .find(filter)
                .skip(skip)
                .limit(limit)
                .populate({
                    path: 'category',
                    model: 'Category'
                })
    },

    updateItemById(itemId, item){
        return model.findByIdAndUpdate(itemId, item)
    },

    removeItemById(itemId){
        return model.findByIdAndDelete(itemId)
    }
    
}