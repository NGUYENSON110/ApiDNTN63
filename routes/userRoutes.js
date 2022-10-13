const userController = require("../controllers/userController");
const { route } = require("./addressRoutes");

const router = require("express").Router();

// GET ALL USERS

router.get("/", userController.getallUser)


module.exports = router;