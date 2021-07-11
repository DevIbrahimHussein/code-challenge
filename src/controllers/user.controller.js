const UserServices = require('../services/user.service.js')


exports.signup = async(req, res, next) => {

    const userModel = UserServices.createUserModel(req.body)
    const registeredUser = await UserServices.signup(userModel)

}

exports.login = async (req, res, next) => {



}

exports.setActiveUser = async(req, res, next) => {

}


