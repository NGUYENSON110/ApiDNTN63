const mongoose = require("mongoose");


const model_voucher = new mongoose.Schema({
    name : {
        type: String,
        
    },
    
    imageurl:{
        type: String,
        required: true,
    }
   

})

let voucher = mongoose.model("voucher", model_voucher)
module.exports = voucher;