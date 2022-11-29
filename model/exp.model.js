const mongoose = require("mongoose")

const model_exp = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    imageurl: {
        type:String, 
        required:true,
    },
    description:{
        type: String,
        required: true,
    },
    food:[
        {
            name:{
                type:String,
                required:true,
            },
            imageurl: {
                type:String, 
                required:true,
            },
        }
    ]
})

let Exp = mongoose.model("Exp", model_exp);
module.exports = Exp;