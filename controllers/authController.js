const authen = require("../model/auth.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authController = {
  registerUser: async (req, res) => {
    try {
      // HASHED PASSWORD
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);

      // NEW USER
      const newUser = await new authen({
        username: req.body.username,
        email: req.body.email,
        password: hashed,
      });

      // SAVE TO DATABASE
      newUser.save();
      res.status(200).json("Welcome");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // LOGIN
  loginUser: async (req, res) => {
    try {
      const user = await authen.findOne({ username: req.body.username });
      if (!user) {
        res.status(400).json("Wrong username!");
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        res.status(400).json("wrong password");
      }
      if (user && validPassword) {
      const token  =  jwt.sign(
          {
            id: user.id,
            admin: user.admin,
          },
          process.env.JWT_ACCESS_KEY,
          { expiresIn: "30d" }
        );
          // Không print ra password
        // const {password, ...others } = user._doc;
        const refreshToken = jwt.sign({
          id: user.id,
          admin: user.admin, 
        }, 
        process.env.JWT_REFRESH_KEY,
        { expiresIn: "365d" }
        )

        res.status(200).json({user,token, refreshToken});
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // REFRESH TOKEN 
  // requestRefreshToken :  async (req, res) =>{
  //     // Take  refresh token from user

  // }



  // LOG OUT
  userLogout : async(req,res) =>{
      
  }
};

module.exports = authController;
