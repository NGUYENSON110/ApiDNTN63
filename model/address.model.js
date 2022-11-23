const mongoose = require("mongoose");

const model_address = new mongoose.Schema({
    name:{
        type:String,
        required:true,  
    },
    imageurl:{
        type:String
    },
    hotels: {
        type: String,  
    }
          
})



let Address = mongoose.model("Address",model_address);

module.exports =  Address;