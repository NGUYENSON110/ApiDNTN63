const router = require("express").Router();
const recommendHotelController = require("../controllers/rmmController");

// ADD recommend Hotel

router.post("/", recommendHotelController.addRecommendHotel);

// GET ALL RECOMMEND HOTEL
router.get("/",recommendHotelController.getAllRecommendHotel);


module.exports = router;