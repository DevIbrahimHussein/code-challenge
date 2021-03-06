const model = require('../models/order.model')

module.exports = {

    createOrderModel(order){
        return new model(order)
    },

    saveOrder(order){
        return order.save()
    },

    allOrders(){
        return model.find()
    },

    getOrderById(orderId){
        return model.findById(orderId)
    },

    deleteOrderById(orderId){
        return model.findByIdAndDelete(orderId)
    },

    updateOrderById(orderId, order){
        return model.findByIdAndUpdate(
            orderId,
            order
        )
    }

}