const router = require("express").Router();
const addressController = require("../controllers/addressController");

// ADD ADDRESS
router.post("/", addressController.addAddress);

// GET ALL ADDRESS
router.get("/", addressController.getallAddress);

// GET AN ANDRESS
router.get("/:id", addressController.getanAddress);

// UPDATE ADDRESS
router.put("/:id", addressController.updateAddress)

module.exports = router;