const { allOrders, createOrderModel, saveOrder, updateOrderById, getOrderById, deleteOrderById } = require("../services/order.service")

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

    req.data = await updateOrderById(req.params.orderId, req.body.items)
    next()

}

exports.cancelOrder = async(req, res, next) => {

    if(getOrderById(req.params.orderId).status != 'pending')
        res.status(403).json({ 'msg': 'You are not authorized to cancel order' })
    
    req.data = await deleteOrderById(req.params.orderId)
    next()

}

exports.modifyStatus = async(req, res, next) => {

    const status = req.query.status
    req.data = await updateOrderById(req.params.orderId, status)
    next()

}
