const router = require("express").Router();
const voucherController = require("../controllers/voucherController")


// ADD VOUCHER
router.post("/", voucherController.addVoucher)

// GET ALL VOUCHER
router.get("/", voucherController.getallVoucher);

module.exports = router;

