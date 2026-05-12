const { Router } = require('express');
const router = Router();
const Worker = require('../models/workerSchema');
const verification = require('../middleware/verification')


router.get('/', verification, async(req, res)=> {
    const workers = await Worker.find()
        res.json(workers)
})

router.get('/:id', verification, async(req, res)=>{
    const worker = await Worker.findById(req.params.id)
    res.json(worker)
})

router.post('/register',verification, async(req, res) =>{
    const worker = await Worker.create({
        name:req.body.name, 
        profession:req.body.profession,
        phone: req.body.phone, 
        location: req.body.location, 
        photo: req.body.photo, 
        experience: req.body.experience, 
        aadhar: req.body.aadhar

}) 
    res.json({
        msg: worker
    })
})

router.delete('/:id' , verification, (req, res) =>{
    Worker.findByIdAndDelete(req.params.id)
    res.json({
        msg: "Deleted successfully"
    })
})



module.exports = router;