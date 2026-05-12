const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../configjwt');


function verification(req, res, next){
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];

    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);

    if(decodedValue.name){
        next()
    }else{
        res.status(403).json({
            msg: "you are not authenticated"
        })
    }

}

module.exports = verification;