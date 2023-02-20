const User = require("../model/auth.model")

const userController = {
    
    // GET ALL USERS
    getallUser : async (req,res) =>{
        try {
            const allUser = await User.find();
            res.status(200).json(allUser);
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // GET AN USERS
    getAnUser : async (req,res) =>{
        try {
            
        } catch (error) {
            
        }
    }

   
}
module.exports = userController