
const booking = require('../model/booking.model');
const hotel = require('../model/hotel.model');

const bookingController = {

    // ADD BOOKING
    addBooking: async (req, res) => {
        try {
            const { hotelId, room } = req.body;
            const hotelNeedUpdate = await hotel.findById(hotelId).lean();
            await hotel.findByIdAndUpdate(hotelId, { room: (hotelNeedUpdate.room - (+room)) })
            const newBooking = await new booking(req.body);
            newBooking.save();
            res.status(200).json(newBooking)
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // GET ALL BOOKING 
    getBooking: async (req, res) => {
        try {
            const getBooking = await booking.find();
            res.status(200).json(getBooking);
        } catch (error) {
            res.status(400).json(error);
        }
    },

     // UPDATE HOTEL
  
  updateBooking: async(req,res) =>{
    try {
      const findanBook = await booking.findById(req.params.id)
      await findanBook.updateOne({$set: req.body});
      res.status(200).json("update successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

    // DETELE BOOKING
    deleteBooking: async (req, res) => {
        try {
            const {id} = req.params;
            const booked = await booking.findById(id).lean();
            const {hotelId, room} = booked;
            const hotelNeedUpdate = await hotel.findById(hotelId).lean()
            await hotel.findByIdAndUpdate(hotelId, { room: (hotelNeedUpdate.room + room) })
            await booking.findOneAndDelete(req.params.id);
            res.status(200).json("delete successfully");
        } catch (error) {
            res.status(400).json(error);
        }
    }
}


module.exports = bookingController;