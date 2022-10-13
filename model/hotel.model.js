const mongoose = require("mongoose")

const model_hotel = new mongoose.Schema({
    name : {
        type:String,
        required: true
    },
    address:
    [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address",
        require: true
    }],
    imageurl: {
        type:String, 
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    disscount:{
        type: Number,
        required: true,

    }
})

let Hotel = mongoose.model("Hotel", model_hotel);
module.exports = Hotel;