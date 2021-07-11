const { saveAddress, createAddressModel, updateAddressById, deleteAddressById } = require('../services/address.service')
const service = require('../services/address.service')

exports.getAddresses = async(req, res, next) => {

    req.data = service.allAddresses()
    next()

}

exports.addAddress = async(req, res, next) => {

    model = createAddressModel(req.body)
    req.data = saveAddress(model)
    next()

}

exports.updateAddress = async(req, res, next) => {

    req.data = updateAddressById(req.params.addressId)
    next()

}


exports.removeAddress = async(req, res, next) => {

    req.data = deleteAddressById(req.params.addressId)
    next()
    
}