const mongoose = require('mongoose');

const signSchema = new mongoose.Schema({
    name: String,
    password: String,
    mail: String
})

const Credential = new mongoose.model('Credential', signSchema);
module.exports = Credential;