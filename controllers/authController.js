const authen = require("../model/auth.model");
const bcrypt = require("bcrypt");



const authController = {
    
    registerUser: async(req,res) =>{
        try {
            // HASHED PASSWORD
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            
            // NEW USER
            const newUser = await new authen({
                username : req.body.username,
                email: req.body.email,
                password: hashed,
            });
            
            // SAVE TO DATABASE 
             newUser.save();
             res.status(200).json("Welcome")
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // LOGIN
    loginUser: async(req,res) =>{
        try {
             const user = await authen.findOne({username: req.body.username})
             if(!user){
                res.status(404).json("Wrong username!")
             }
             const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
             )
                if(!validPassword){
                    res.status(404).json("wrong password")

                }
                if(user && validPassword){
                    res.status(200).json(user)
                }
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = authController;