const Address = require("../model/address.model");



const addressController = {
    // ADD address
        addAddress: async(req,res) => {
                // res.status(200).json(req.body)

            try {
                const newAddress =  await new Address(req.body);
                    newAddress.save();
                res.status(200).json(newAddress)
            } catch (error) {
                res.status(500).json(error)
            }
        },


    // GET ALL ADDRESS 
        getallAddress: async (req,res) => {
            try {
               const allAddress = await Address.find();
               res.status(200).json(allAddress)     
            } catch (error) {
                res.status(500).json(error)
            }
        },

        // GET AN ANDRESS
        getanAddress: async(req,res) =>{
            try {
                const anAddress = await Address.findById(req.params.id)
                res.status(200).json(anAddress)
            } catch (error) {
                res.status(500).json(error)
            }
        },
        

        // UPDATE ADDRESS
        updateAddress: async(req,res) =>{
            try {
                const findanAddress = await Address.findById(req.params.id)
                await findanAddress.updateOne({$set: req.body});
                res.status(200).json("update sucessfully")
            } catch (error) {
                res.status(500).json(error)
            }
        }

};

module.exports = addressController;