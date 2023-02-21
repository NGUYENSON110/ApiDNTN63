const mongoose = require("mongoose")

const model_hotel = new mongoose.Schema({
    name : {
        type:String,
        required: true
    },
    address:
    {
        type: String,
        require: true
    },
    imageurl: {
        type:String, 
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    room:{
        type:Number,
        require:true,
    },
    description:{
        type: String,
        required: true,
    },
    phone:{
        type:Number,
        required: true,
    },
    
})

let Hotel = mongoose.model("Hotel", model_hotel);
module.exports = Hotel;