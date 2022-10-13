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

   
}
module.exports = userController