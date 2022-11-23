const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
var bodyParser = require("body-parser")
const morgan = require("morgan")
const dotenv = require("dotenv")
const addressRoute = require("./routes/addressRoutes")
const hotelRoute = require("./routes/hotelRoutes");
const voucherRoute = require("./routes/voucherRoutes");
const authRoute = require("./routes/authRouters");
const userRoute = require("./routes/userRoutes");
const recommendHotel = require("./routes/rmmRoutes");

dotenv.config();
const app = express();
const PORT = 5000;


// CONNECT DATABASE
mongoose.connect(
    process.env.MONGODB_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    (err) => {
     if(err) console.log("11111",err) 
     else console.log("mongdb is connected");
    }
  );
  


app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));
app.use(express.json());
// 
app.get('/',(req,res) =>{
    res.send("hello")
})

// ROUTES
app.use("/v1/address", addressRoute);
app.use("/v1/hotel", hotelRoute);
app.use("/v1/voucher",voucherRoute);
app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);
app.use("/v1/recommendHotel", recommendHotel);




app.listen(PORT, () =>{
    console.log("Server is running....")
})
