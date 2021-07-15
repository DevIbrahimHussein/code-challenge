const { createUserModel, signup, signin, updateUserById, isLoginInputsValid, isRegistrationInputsValid } = require('../services/user.service')

exports.signup = async(req, res, next) => {

    const { errors, isValid } = isRegistrationInputsValid(req.body)

    if(!isValid)
        res.status(403).json(errors)

    const userModel = await createUserModel(req.body)
    req.data = await signup(userModel)
    next()

}

exports.login = async (req, res, next) => {

    const { errors, isValid } = isLoginInputsValid(req.body)

    if(!isValid)
        res.status(403).json(errors)

    const userModel = await createUserModel(req.body)
    req.data = await signin(userModel)
    next()

}

exports.updateUser = async(req, res, next) => {

    if(req.body.email)
        res.status(403).json({ 'msg': 'Email cannot be updated' })
    
    req.data = await updateUserById(req.params.userId)
    next()

}

exports.setUserActivity = async(req, res, next) => {

    const active = {
        active: req.params.active
    }
    
    req.data = await updateUserById(req.params.userId, active)
    next()

}


