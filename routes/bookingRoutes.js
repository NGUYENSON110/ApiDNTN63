const router = require('express').Router();
const bookingController = require("../controllers/bookingController");


// ADD Booking
router.post("/",bookingController.addBooking);

// GET booking

router.get("/", bookingController.getBooking);
// UPDATE A HOTEL

router.put("/:id" , bookingController.updateBooking);

// DELETE booking
router.delete("/:id", bookingController.deleteBooking);

module.exports = router;