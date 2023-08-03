const SUser = require("../models/specialUser");
const GUser = require("../models/generalUser");
const PUser = require("../models/premium");
const SPUser = require("../models/specialPremium");

// This logic only update montly amount. If we want to avoid some user it allows.
exports.updateAllUser = async(req,res)=>{
  try{
      let data = req.body.SerialNo; // This should be array
      let type = req.body.MemberType
    if(type == "G"){
        let users = await GUser.find();
        users.forEach(user=>{
            if(!data.includes(user.SerialNo)){
                let joiningDate = user.JoiningDate
                var past_date = new Date(joiningDate);
                var current_date = new Date(); 
                var difference = (current_date.getFullYear() * 12 + current_date.getMonth()) - (past_date.getFullYear() * 12 + past_date.getMonth()) + 1;
                if(user.ActiveMonth >= difference){
                    console.log(user.SerialNo+" This memeber already paid")                   
                }else{
                    user.ActiveMonth++;
                }


            user.save();
            }
        })
        return res.status(200).send({
            message:"All GENERAL record updated "
        });
    }
    if(type == "S"){
        let users = await SUser.find();
        users.forEach(user=>{
            if(!data.includes(user.SerialNo)){
                let joiningDate = user.JoiningDate
                var past_date = new Date(joiningDate);
                var current_date = new Date(); 
                var difference = (current_date.getFullYear() * 12 + current_date.getMonth()) - (past_date.getFullYear() * 12 + past_date.getMonth()) + 1;
                if(user.ActiveMonth >= difference){
                    console.log(user.SerialNo+" This memeber already paid")                   
                }else{
                    user.ActiveMonth++;
                }


            user.save();
            }
        })
        return res.status(200).send({
            message:"All SPECIAL record updated"
        });
    }
    if(type == "P"){
        let users = await PUser.find();
        if(users.length==0){
            return res.status(200).send({
                message:"Plz provide valid serial number"
            });
        }
        users.forEach(user=>{
            if(!data.includes(user.SerialNo)){
                let joiningDate = user.JoiningDate
                var past_date = new Date(joiningDate);
                var current_date = new Date(); 
                var difference = (current_date.getFullYear() * 12 + current_date.getMonth()) - (past_date.getFullYear() * 12 + past_date.getMonth()) + 1;
                if(user.ActiveMonth >= difference){
                    console.log(user.SerialNo+" This memeber already paid")                   
                }else{
                    user.ActiveMonth++;
                }


            user.save();
            }
        })
        return res.status(200).send({
            message:"All Premium record updated "
        });
    }
    if(type == "SP"){
        let users = await SPUser.find();
        if(users.length==0){
            return res.status(200).send({
                message:"Plz provide valid serial number"
            });
        }
        users.forEach(user=>{
            if(!data.includes(user.SerialNo)){
                let joiningDate = user.JoiningDate
                var past_date = new Date(joiningDate);
                var current_date = new Date(); 
                var difference = (current_date.getFullYear() * 12 + current_date.getMonth()) - (past_date.getFullYear() * 12 + past_date.getMonth()) + 1;
                if(user.ActiveMonth >= difference){
                    console.log(user.SerialNo+" This memeber already paid")                   
                }else{
                    user.ActiveMonth++;
                }


            user.save();
            }
        })
        return res.status(200).send({
            message:"All Premium Special record updated "
        });
    }
     return res.status(400).send({
          message:"Plz provide valid request body"
      });
  }catch(err){
      console.log("Internal error ",err.message);
      res.status(500).send({
          message:"Some internal error while sigin"
      })
  }
} 

// Only this thing is pending

// This Logic update particular user details

exports.updateOneUser = async (req,res)=>{
  try{
    let SerialNo = req.body.SerialNo;
    let type = req.body.MemberType
      if(type == "G"){ 
        let user = await GUser.findOne({SerialNo:SerialNo});
        if(user){
            if(req.body.LoanStatus)user.LoanStatus=req.body.LoanStatus;
            if(req.body.GuarnterId)user.GuarnterId=req.body.GuarnterId;
            if(req.body.LateFine)user.LateFine=req.body.LateFine;
            if(req.body.PerformanceNumber)user.PerformanceNumber=req.body.PerformanceNumber;
            if(req.body.Comment)user.Comment=req.body.Comment;
            await user.save();
            return res.status(200).send({
                message:" record updated successfully"
            });
        }
      }
      if(type == "S"){
        let user = await SUser.findOne({SerialNo:SerialNo});
        if(user){
            if(req.body.LoanStatus)user.LoanStatus=req.body.LoanStatus;
            if(req.body.GuarnterId)user.GuarnterId=req.body.GuarnterId;
            if(req.body.LateFine)user.LateFine=req.body.LateFine;
            if(req.body.PerformanceNumber)user.PerformanceNumber=req.body.PerformanceNumber;
            if(req.body.Comment)user.Comment=req.body.Comment;
            await user.save();
            return res.status(200).send({
                message:" record updated successfully"
            });
        }
      }
      if(type == "P"){
        let user = await PUser.findOne({SerialNo:SerialNo});
        if(user){
            if(req.body.LoanStatus)user.LoanStatus=req.body.LoanStatus;
            if(req.body.GuarnterId)user.GuarnterId=req.body.GuarnterId;
            if(req.body.LateFine)user.LateFine=req.body.LateFine;
            if(req.body.PerformanceNumber)user.PerformanceNumber=req.body.PerformanceNumber;
            if(req.body.Comment)user.Comment=req.body.Comment;
            await user.save();
            return res.status(200).send({
                message:" record updated successfully"
            });
        }
      }
      if(type == "SP"){
        let user = await SPUser.findOne({SerialNo:SerialNo});
        if(user){
            if(req.body.LoanStatus)user.LoanStatus=req.body.LoanStatus;
            if(req.body.GuarnterId)user.GuarnterId=req.body.GuarnterId;
            if(req.body.LateFine)user.LateFine=req.body.LateFine;
            if(req.body.PerformanceNumber)user.PerformanceNumber=req.body.PerformanceNumber;
            if(req.body.Comment)user.Comment=req.body.Comment;
            await user.save();
            return res.status(200).send({
                message:" record updated successfully"
            });
        }
      }
      return res.status(200).send({
          message:" Please provide valid request body "
      });
  }catch(err){
      console.log("Internal error ",err.message);
      res.status(500).send({
          message:"Some internal error while sigin"
      })
  }
}




