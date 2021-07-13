const { createUserModel, signup, signin, updateUserById } = require("../services/user.service")


exports.signup = async(req, res, next) => {

    const userModel = await createUserModel(req.body)
    const registeredUser = await signup(userModel)

}

exports.login = async (req, res, next) => {

    const userModel = await createUserModel(req.body)
    req.data = await signin(userModel)
    next()

}

exports.setUserActivity = async(req, res, next) => {

    const active = {
        active: req.params.active
    }
    
    req.data = await updateUserById(req.params.userId, active)
    next()

}


