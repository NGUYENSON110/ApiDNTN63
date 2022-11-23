const recommendHotel = require("../model/rmm.model")

const recommendHotelController = {

    // ADD HOTEL
    addRecommendHotel : async (req,res) =>{
        try {
            const newRecommendHotel = await new recommendHotel(req.body);
            newRecommendHotel.save();
            res.status(200).json(newRecommendHotel);
        } catch (error) {
            res.status(500).json(error);
    }
},

    // GET ALL HOTEL
    getAllRecommendHotel : async (req,res)=>{
        try {
            const getAllRecommendHotel = await recommendHotel.find();
            res.status(200).json(getAllRecommendHotel);
        } catch (error) {
            res.status(500).json(error)
        }
    }




}

module.exports = recommendHotelController;