const { saveAddress, createAddressModel, updateAddressById, deleteAddressById, allAddresses } = require('../services/address.service')

exports.getAddresses = async(req, res, next) => {

    req.data = await allAddresses()
    next()

}

exports.addAddress = async(req, res, next) => {

    model = await createAddressModel(req.body)
    req.data = await saveAddress(model)
    next()

}

exports.updateAddress = async(req, res, next) => {

    req.data = await updateAddressById(req.params.addressId, req.body)
    next()

}


exports.removeAddress = async(req, res, next) => {

    req.data = await deleteAddressById(req.params.addressId)
    next()
    
}