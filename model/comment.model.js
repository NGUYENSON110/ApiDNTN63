const mongoose = require("mongoose");

const model_comment = new mongoose.Schema({
    description :{
        type: String,
        required: true
    },
    hotelId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    Date: {
        type: Date,
        
    }

})

let comment = mongoose.model("comment",model_comment);
module.exports = comment;