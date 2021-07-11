const model = require('../models/menu.model')

module.exports = {

    createMenuModel(menu){
        return new model(menu)
    },

    allMenu(){
        return model.find()
    },

    deleteMenyById(menuId){
        return model.findByIdAndDelete(menuId)
    },

    updateMenuById(menuId, menu){
        return model.findByIdAndUpdate(
            menuId,
            menu
        )
    }

}