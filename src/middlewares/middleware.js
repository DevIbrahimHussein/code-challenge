const { verifyToken, isAdmin } = require("../services/user.service")
const { verifyAdmin } = require("../utils/app.utils")

exports.dataHandler = (req, res) => {

    const data = req.data

    if(!data){
        return res.sendStatus(204)
    }
    res.status(200).json(data)
    
}

exports.verifyToken = (req, res, next) => {

    const verified = verifyToken(req.headers.authorization)

    if(!verified)
        res.sendStatus(403)

    next()

}

exports.verifyAdmin = (req, res, next) => {

    if(!isAdmin(req.params.userId))
        res.sendStatus(403)
    
    next()
    
}
