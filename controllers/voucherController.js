const voucher = require('../model/voucher.model');

const voucherController ={
    // ADD voucher
    addVoucher: async(req,res) =>{
        try {
            const newVoucher = await new voucher(req.body)
            newVoucher.save();
            res.status(200).json(newVoucher);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    
    // GET ALL VOUCHER
    getallVoucher : async(req,res) =>{
        try {
            const getallVoucher = await voucher.find();
            res.status(200).json(getallVoucher)
        } catch (error) {
            res.status(500).json(error);
        }
    },

}

module.exports = voucherController;