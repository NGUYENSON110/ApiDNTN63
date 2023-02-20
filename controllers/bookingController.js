
const booking = require('../model/booking.model');

const bookingController = {
    
    // ADD BOOKING
    addBooking : async (req, res) =>{
        try {
            const newBooking = await new booking(req.body);
            newBooking.save();
            res.status(200).json(newBooking)
        } catch (error) {
            res.status(400).json(error);
        }
    },

    // GET BOOKING 
    getBooking : async(req,res) =>{
        try {
            const getBooking = await booking.find();
            res.status(200).json(getBooking);
        } catch (error) {
            res.status(400).json(error);
        }
    },

    // DETELE BOOKING
    deleteBooking : async(req,res) =>{
        try {
            await booking.findOneAndDelete(req.params.id);
            res.status(200).json("delete successfully");
        } catch (error) {
            res.status(400).json(error);
        }
    }
}


module.exports = bookingController;