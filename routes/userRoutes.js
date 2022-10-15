const userController = require("../controllers/userController");
const { route } = require("./addressRoutes");
const middlewareController = require("../middleware/middleware")
const router = require("express").Router();

// GET ALL USERS

router.get("/",middlewareController.verifyToken, userController.getallUser)


module.exports = router;