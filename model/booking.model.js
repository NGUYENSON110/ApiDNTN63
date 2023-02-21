const mongoose = require("mongoose");

const model_booking = new mongoose.Schema({
    hotelId:{ type: mongoose.Schema.Types.ObjectId, ref: "hotels" },
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
    },
    room: {
        type: Number,
        required: true,
    }
})

let booking = mongoose.model("booking",model_booking);
module.exports = booking;