const Hotel = require("../model/hotel.model");

const hotelController = {


  // ADD HOTEL
  addHotel: async (req, res) => {
    try {
      const newHotel = await new Hotel(req.body);
      newHotel.save();
      res.status(200).json(newHotel);
    } catch (error) {
      res.status(500).json(error);
    }
  },


  // GET ALL HOTEL
  getallHotel: async (req, res) => {
    try {
      const allHotel = await Hotel.find();
      res.status(200).json(allHotel);
    } catch (error) {
      res.status(500).json(error);
    }
  },


  //    GET AN HOTEL
  getanHotel: async (req, res) => {
    try {
        const anHotel = await Hotel.findById(req.params.id);
        res.status(200).json(anHotel);
         
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // UPDATE HOTEL
  
  updateHotel: async(req,res) =>{
    try {
      const findanBook = await Hotel.findById(req.params.id)
      await findanBook.updateOne({$set: req.body});
      res.status(200).json("update successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

module.exports = hotelController;
