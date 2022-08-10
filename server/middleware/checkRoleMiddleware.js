const jwt = require('jsonwebtoken')

module.exports = function(role) {
    return function(req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1]
    
            if (!token) {
                res.status(401).json({message: "Пользователь не авторизован"})
            }
            const decode = jwt.verify(token, process.env.SECRET_KEY_JWT)
            if(decode.role !== role) {
                res.status(403).json({message: "У вас нет доступа"})
            }
            res.user = decode
            next()
        } catch {
            res.status(401).json({message: "Пользователь не авторизован"})
        }
    }
}