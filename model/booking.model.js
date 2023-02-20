const mongoose = require("mongoose");

const model_booking = new mongoose.Schema({
    hotelId:{
        type: String,
        required : true,
    },
    phoneuserName : {
        type:String,
        required: true,
    },
    timego:{
        type: Date,
        required: true,
    },
    timeover:{
        type: Date,
        required: true,
    },
    hotelName:{
        type:String, 
        required: true,
    },
    price:{
        type: String, 
        required: true,
    }
})

let booking = mongoose.model("booking",model_booking);
module.exports = booking;