const mongoose = require('mongoose');

const ReviewModel = new mongoose.Schema({
    taskprovider:{
        type :String,
        required : true,
        default:null
    },
    taskworker:{
        type :String,
        required : true,
        default:null
    },
    rating:{
        type :String,
        required : true,
        default:null
    }
})

module.exports = mongoose.model('review',ReviewModel)