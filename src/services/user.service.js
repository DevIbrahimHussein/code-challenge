const User = require('../models/user.model.js')

module.exports = {

    createUserModel(user) {
        return new User(user)
    },

    signup(user){
        return user.save()
    },

    signin(user) {
        return this.signToken(user)
    },

    signToken(user){

        const payload = {
            id: user.id,
            email: user.email
        }

        const expiresIn = {
            expiresIn: 31556926
        }

        const refreshTokenLife = { expiresIn: 31556926 }
                
        // Sign token
        const token = jwt.sign(
            payload,
            process.env.JwtSECRET,
            expiresIn
        )

        const refreshToken = jwt.sign(user, process.env.refreshTokenSECRET, refreshTokenLife)

        const response = {
            "status": "Logged in",
            "token": token,
            "refreshToken": refreshToken,
        }

        tokenList[refreshToken] = response
        res.status(200).json(response);
    
        return token
    },

    verifyToken(token) {
        if(token == null || isEmpty(token)){
            return false
        }
        const decoded = jwt.verify(token, process.env.JwtSECRET)
        return decoded
    },

    async isAdmin(userId){
        const user = await User.findbyId(userId)
        if(user.role == 'admin') return true
        return false
    },

    allUsers(filter) {
        return User.find(filter)
    },
    
    findbyId(id){
        return User.findById(id)
    },

    findByEmail(email) {
        return User.findOne(
            {
                email: email
            }
        )
    },

    findByEmailAndPassword(email, password) {
        return User.findOne(
            {
                email: email,
                password: password
            }
        )
    },

    isActiveUserByEmail(email){
        return User.findOne({ email: email, active: true })
    },

    isActiveUserById(id){
        return User.findOne({ _id: id, active: true })
    },

    setIsActiveTrue(userId){
        return User.findByIdAndUpdate(
            userId,
            { active: true }
        )
    },

    updateUserById(userId, user) {
        return User.findByIdAndUpdate(
            userId,
            user
        )
    },

    deleteUserById(userId) {
        return User.findByIdAndDelete(userId)
    },

    isRegistrationInputsValid: function (data) {

        let errors = {};
        const requestBodyKeysCount = Object.keys(data).length
        const requestBodyRequiredLength = 3

        data.email = !isEmpty(data.email) ? data.email : ""
        data.name = !isEmpty(data.name) ? data.name : ""
        data.password = !isEmpty(data.password) ? data.password : ""

        // username check
        if (Validator.isEmpty(data.email)) {
            errors.email = "Email field is required"
        }

        // name check
        if (Validator.isEmpty(data.name)) {
            errors.name = "Name field is required"
        }

        // password check
        if (Validator.isEmpty(data.password)) {
            errors.password = "password field is required"
        }

        if (requestBodyKeysCount > requestBodyRequiredLength) {
            errors.inputs = "there are more input fields than its required"
        }

        return {
            errors,
            isValid: isEmpty(errors)
        }

    },

    isLoginInputsValid: function (data) {

        let errors = {}

        // Convert empty fields to an empty string so we can use validator functions
        data.email = !isEmpty(data.email) ? data.email : ""
        data.password = !isEmpty(data.password) ? data.password : ""

        // username check
        if (Validator.isEmpty(data.email)) {
            errors.email = "Email field is required"
        }

        // password check
        if (Validator.isEmpty(data.password)) {
            errors.password = "Password field is required"
        }

        return {
            errors,
            isValid: isEmpty(errors)
        }
    },

    isAuth(auth) {
        const isAuth = !auth ? false : true
        return isAuth
    }

}
