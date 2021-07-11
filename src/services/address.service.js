const model = require('../models/address.model')

module.exports = {

    createAddressModel(address){
        return new model(address)
    },

    saveAddress(address){
        return address.save()
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