const model = require('../models/menu.model')

module.exports = {

    createMenuModel(menu){
        return new model(menu)
    },

    saveMenu(menu){
        return menu.save()
    },

    allMenu(){
        return model.find()
    },

    deleteMenuById(menuId){
        return model.findByIdAndDelete(menuId)
    },

    updateMenuById(menuId, menu){
        return model.findByIdAndUpdate(
            menuId,
            menu
        )
    }

}