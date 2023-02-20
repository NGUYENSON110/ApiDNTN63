const router = require("express").Router();
const hotelController = require("../controllers/hotelContoller");


// ADD HOTEL
router.post("/",hotelController.addHotel);

// GET ALL HOTEL
router.get("/", hotelController.getallHotel);

// GET AN HOTEL
router.get("/:id", hotelController.getanHotel);

// UPDATE A HOTEL

router.put("/:id" , hotelController.updateHotel);
// DELETE HOTEL
router.delete("/:id" , hotelController.deleteHotel);

module.exports = router;