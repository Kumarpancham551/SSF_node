const SUser = require("../models/specialUser");
const GUser = require("../models/generalUser");
const PUser = require("../models/premium");
const SPUser = require("../models/specialPremium");
const jwt = require("jsonwebtoken");

exports.login = async (req,res)=>{
    const userId = req.body.SerialNo
    const user = await SUser.find({SerialNo:userId})
    if(user.length === 0) return res.status(400).send("User not found");
console.log(user)
    const token = jwt.sign({SerialNo:user[0].SerialNo},"secretkey");
    res.cookie("accessToken",token,{
        httpOnly:true,
    }).status(200).send(user[0]);
}