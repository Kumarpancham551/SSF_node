//const PUser = require("../models/premium");
//const SPUser = require("../models/specialPremium");
//const GUser = require("../models/generalUser");
//const SUser = require("../models/specialUser");

module.exports.insertRecord = async(req,res)=>{
    try{
        const data ={
            SerialNo:"67",
            MemberNumber:"2205244133",
            MemberType:"Special",
            Name:"Sunil Kumar ",
            MobileNumber:"6202970025",
            UIDNumber:"329,094,244,133",
            Address:"Vill- chhati tetrai, po- tetrai ,ps- panki palamu jharkhand",
            JoiningDate:"5-22-2023",  //mm-DD-yyyyy
            LoanStatus:"0",
            GuarnterId:"0",
            LateFine:"0",
            ActiveMonth:"1",
            JoinerId:"24",
            PerformanceNumber:"0",
            Comment:"Ok"
            }
        await SUser.create(data);
            res.status(200).send("Data inserted");
    }catch(err){
     return res.status(500).send({
        msg:"some internal error"
     });
    }
    }



    /*
     const data ={
            SerialNo:"3P",
            MemberNumber:"605376901",
            MemberType:"Premium",
            Name:"Sumanth kumar ",
            MobileNumber:"6204751917",
            UIDNumber:"468,406,376,901",
            Address:"Village tukbera pot kanda p.s nawabazar Palamu Jharkhand",
            JoiningDate:"6-05-2023",
            LoanStatus:"0",
            GuarnterId:"0",
            LateFine:"0",
            ActiveMonth:"1",
            JoinerId:"19",
            PerformanceNumber:"0",
            Comment:"Ok"
            }
    */