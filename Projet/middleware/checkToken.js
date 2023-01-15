const jwt = require('jsonwebtoken');

function checkToken(req, res, next) {
    let token = ""
    if (req.headers.authorization) {
        token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token, 'ma super clé');
        console.log(decoded);
        if (decoded && decoded.user) {
            req.user = { mail: decoded.user, niveau: decoded.niveau }
            next()
        }
        else {
            res.status(401).json({ mess: "route protégée" })
        }
    } else {
        res.status(401).json({ mess: "route protégée" })
    }

}
module.exports = checkToken