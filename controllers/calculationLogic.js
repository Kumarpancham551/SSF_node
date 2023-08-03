const SUser = require("../models/specialUser");
const GUser = require("../models/generalUser");
const PUser = require("../models/premium");
const SPUser = require("../models/specialPremium");

// This Logic calculate all amount of user
exports.totalAmount = async (req, res) => {
    try {
        const susers= await SUser.find();
        const gusers= await GUser.find();
        const pusers= await PUser.find();
        const spusers= await SPUser.find();
        let s = 0;
        console.log(susers)
        if(susers.length>0){
            susers.forEach(user=>{
                s += parseInt(user.ActiveMonth)*100
            })
            s +=  susers.length*1000;
            console.log("Special User ",s); // print only special user amount.
        }
        let g = 0;
        if(gusers.length>0){
            gusers.forEach(user=>{
                g += parseInt(user.ActiveMonth)*100
            }) 
            console.log("General User ",g); // print only general user amount.  
        }
        let p = 0;
        if(pusers.length>0){
            pusers.forEach(user=>{
                p += parseInt(user.ActiveMonth)*500
            })
            p += pusers.length*1000;
            console.log("premium user ",p); // print only premium user amount. 
        }
        let sp = 0;
        if(spusers.length>0){
            spusers.forEach(user=>{
                sp += parseInt(user.ActiveMonth)*1000
            })
            sp += spusers.length*1000;
            console.log("special premium user ",sp); // print only special premium user amount. 
        }
       let result = s+g+p+sp;
       let temp = {
        SU:s,
        GU:g,
        PU:p,
        SPU:sp,
        Total:result
       }
       return res.status(200).send(temp)
    } catch (err) {
        console.log("Internal error ", err.message);
        res.status(500).send({
            message: "Some internal error while sigin"
        })
    }

}

// This logic calculate all given loan amount.

exports.totalLoanAmount = async (req, res) => {
    try {
        const susers= await SUser.find();
        const gusers= await GUser.find();
        const pusers= await PUser.find();
        const spusers= await SPUser.find();
        let s = 0;
        susers.forEach(user=>{
                s += parseInt(user.LoanStatus)
        })
        let g = 0;
        gusers.forEach(user=>{
            g += parseInt(user.LoanStatus)
        })
        let p = 0;
        pusers.forEach(user=>{
            p += parseInt(user.LoanStatus)
        })
        let sp = 0;
        spusers.forEach(user=>{
            sp += parseInt(user.LoanStatus)
        })
        let result = s+g+p+sp;
        let temp = {
            SU:s,
            GU:g,
            PU:p,
            SPU:sp,
            Total:result
           }
       // console.log(new Intl.NumberFormat('en-IN').format(result)); //print in readable format
       res.send(temp)
        // res.status(200).send({
        //     "Special User = ": new Intl.NumberFormat('en-IN').format(s),
        //     "General User = ": new Intl.NumberFormat('en-IN').format(g),
        //     "Premium User = ": new Intl.NumberFormat('en-IN').format(p),
        //     "Special Premium User = ": new Intl.NumberFormat('en-IN').format(sp),
        //     "Total loan Amount = ":new Intl.NumberFormat('en-IN').format(result)
        // })
    } catch (err) {
        console.log("Internal error ", err.message);
        res.status(500).send({
            message: "Some internal error while sigin"
        })
    }

}