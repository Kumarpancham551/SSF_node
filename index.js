const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");


app.use((req,res,next)=>{
   res.header("Access-Control-Allow-Credentials",true)

   next();
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({
   origin:"http://localhost:3000"
}));
app.use(cookieParser());

mongoose.connect("mongodb://0.0.0.0:27017/SSFDB");

 const db = mongoose.connection;
db.on("error",()=>{
   console.log("Error while connecting to MongoDB");
});
db.once("open",()=>{
   console.log("Connected to mongoDB");
  
})


 require("./routes/calculationLogic")(app);
 require("./routes/findLogic")(app);
 require("./routes/updateLogic")(app);
 require("./routes/totalAmountMonthWise")(app);
 require("./routes/auth")(app);

app.listen(8080,()=>{
  console.log("server started successfully");
});