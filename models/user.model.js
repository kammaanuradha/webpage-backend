const mongoose = require('mongoose');

const UserModel = new mongoose.Schema({
    fullname:{
        type :String,
        required : true,
        default:null
    },
    email:{
        type :String,
        required : true,
        default:null
    },
    mobile:{
        type :String,
        required : true,
        default:null
    },
    skill:{
        type :String,
        required : true,
        default:null
    },
    password:{
        type :String,
        required : true,
        default:null
    }

})

module.exports = mongoose.model('User',UserModel)