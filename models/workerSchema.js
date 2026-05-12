const mongoose = require('mongoose')

const workerSchema = new mongoose.Schema({
    name: String,
    profession: String,
    phone: Number,
    location: String,
    photo: String,
    experience: String,
    aadhar: String
})
const Worker = mongoose.model("Worker", workerSchema)
module.exports = Worker;