const { allMenu, createMenuModel, saveMenu, updateMenuById } = require("../services/menu.service")

exports.getMenu = async(req, res, next) => {

    req.data = await allMenu()
    next()

}

exports.addMenu = async(req, res, next) => {

    const model = await createMenuModel(req.body)
    req.data = await saveMenu(model)
    next()

}

exports.updateMenu = async(req, res, next) => {

    req.data = await updateMenuById(req.params.menuId)
    next()

}


exports.removeMenu = async(req, res, next) => {

    
    
}