const model = require('../models/item.model')

module.exports = {

    createItemModel(item){
        return new model(item)
    },

    saveItem(item){
        return item.save()
    },

    getItems(){
        return model.find()
    },

    updateItem(itemId, item){
        return model.findByIdAndUpdate(itemId, item)
    },

    removeItem(itemId){
        return model.findByIdAndDelete(itemId)
    }
    
}