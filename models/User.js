const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    
    email: String,
    teams: Array,
    players: Array

    

})

module.exports = User = mongoose.model('user',UserSchema)