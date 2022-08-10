const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1]

        if (!token) {
            res.status(401).json({message: "Пользователь не авторизован"})
        }
        const decode = jwt.verify(token, process.env.SECRET_KEY_JWT)
        res.user = decode
        next()
    } catch {
        res.status(401).json({message: "Пользователь не авторизован"})
    }
}