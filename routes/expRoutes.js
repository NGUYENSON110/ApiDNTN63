const router = require("express").Router();
const expController = require('../controllers/expController');



// ADD HOTEL
router.post("/",expController.addExp);

// GET ALL HOTEL
router.get("/", expController.getallExp);

module.exports = router;