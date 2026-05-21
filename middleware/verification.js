const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../configjwt');

function verification(req, res, next){
    const token = req.headers.authorization;
    
    if(!token){
        return res.status(403).json({
            msg: "No token provided"
        })
    }
    
    const words = token.split(" ");
    const jwtToken = words[1];

    try {
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
        if(decodedValue.name){
            next()
        } else {
            res.status(403).json({ msg: "you are not authenticated" })
        }
    } catch(err) {
        res.status(403).json({ msg: "Invalid token" })
    }
}

module.exports = verification;