const model = require('../models/address.model')

module.exports = {

    createAddressService(address){
        return new model(address)
    },

    allAddresses(){
        return model.find()
    },

    deleteAddressById(addressId){
        return model.findByIdAndDelete(addressId)
    },

    updateAddressById(addressId, address){
        return model.findByIdAndUpdate(
            addressId,
            address
        )
    }

}