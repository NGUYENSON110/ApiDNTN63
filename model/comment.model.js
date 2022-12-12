const mongoose = require("mongoose");

const comment_user = new mongoose.Schema({
    description :{
        type: String,
        required: true
    },
    hotelId: {
        type: String,
        required: true,
    }


    
})