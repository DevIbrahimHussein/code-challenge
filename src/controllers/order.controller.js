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

exports.updateOrder = async(req, res, next) => {

    req.data = await updateOrderById(req.params.orderId)
    next()

}

exports.modifyStatus = async(req, res, next) => {


    const status = req.query.status
    req.data = await updateOrderById(req.params.orderId, status)
    next()

}
