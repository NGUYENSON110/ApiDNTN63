const mongoose = require("mongoose");

const model_recommned_hotel = new mongoose.Schema({
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
    bed:{
        type: Number,
        required:true,
    }    
})

let recommnedHotel = mongoose.model("recommendHotel", model_recommned_hotel);
module.exports = recommnedHotel;