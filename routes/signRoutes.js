const {Router} = require('express');
const router = Router();
const Credential = require('../models/signSchema')
const {JWT_SECRET} = require('../configjwt')
const jwt = require('jsonwebtoken')



router.post('/sign-up', async(req,res)=> {
    const signup = await Credential.create({
        name: req.body.name,
        password: req.body.password,
        mail: req.body.mail
    })
    res.json({
        msg: `your profile is created ${signup.name}`
    })
})

router.post('/sign-in', async(req,res)=>{
    const signin = await Credential.findOne({
        name: req.body.name,
        password: req.body.password
    });
    if(signin){
        const token = jwt.sign({
            name: signin.name, id: signin._id
        },JWT_SECRET)
        
    
    res.json({
        msg: `Welcome back ${signin.name}`, token
    })
}

    else {
        return res.status(401).json({ msg: 'Invalid credentials' });
      }

    
})

module.exports = router;