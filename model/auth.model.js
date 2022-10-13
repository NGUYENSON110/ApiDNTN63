const mongoose = require("mongoose")

const model_user = new mongoose.Schema({
    username: {
        type:String,
        required: true,
        minlength: 6,
        maxlength: 20,
        unique: true
    },

    email:{
        type:String,
        required: true,
        minlength: 20,
        maxlength: 50,
        unique: true
    },

    password:{
        type:String,
        required:true,
        minlength: 6,

    },

    admin:{
        type:Boolean,
        default:false

    },
}, {timestamps:true} 

)
let user = mongoose.model("user", model_user)
module.exports = user;