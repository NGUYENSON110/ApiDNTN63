const jwt = require("jsonwebtoken")

const middlewareController = {

    // Verify token
    verifyToken : (req,res, next) =>{
        const token = req.headers.token;
        if(token){
            
            const accessToken =  token.split(" ")[1];
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY,(error, user) =>{
                if(error){
                    res.status(403).json("token is not valid");
                }
                req.user = user;
                next();
            });
        }
        else{
            res.status(401).json("You're not authenticated")
        }
       
    },

    verifyTokenandAdmin : (req,res, next) =>{
        middlewareController.verifyToken(req,res, () =>{
           if(req.user.id == req.params.id || req.user.admin){
                next();
           }     
           else{
                res.status(403).json("you are not allowed to delete other");
           }
        });
    }
}

module.exports = middlewareController;