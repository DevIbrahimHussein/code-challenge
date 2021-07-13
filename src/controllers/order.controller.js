const { allOrders, createOrderModel, saveOrder, updateOrderById } = require("../services/order.service")

exports.listOrders = async(req, res, next) => {

    req.data = await allOrders()
    next()

}

exports.createOrder = async(req, res, next) => {

    const model = await createOrderModel(req.data)
    req.data = await saveOrder(model)
    next()

}

exports.updateAddress = async(req, res, next) => {

    req.data = await updateOrderById(req.params.id)
    next()

}
