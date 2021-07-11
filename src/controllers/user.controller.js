const { createUserModel, signup } = require("../services/user.service")


exports.signup = async(req, res, next) => {

    const userModel = createUserModel(req.body)
    const registeredUser = await signup(userModel)

}

exports.login = async (req, res, next) => {



}

exports.setActiveUser = async(req, res, next) => {

}


