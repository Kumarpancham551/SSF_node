const SUser = require("../models/specialUser");
const GUser = require("../models/generalUser");
const PUser = require("../models/premium");
const SPUser = require("../models/specialPremium");

// Using this logic we can find specific user details based on their serial numbaer
exports.findOneUserDetails = async (req, res) => {
    try {
        console.log(req.body)
        const userId = req.body.SerialNo
        let type = req.body.MemberType
        if (type == "G") {
            const user = await GUser.find({ SerialNo: userId })
            if (user.length==0) {
                return res.status(400).send({
                    message: "Failed ! user id  doesn't exist"
                });
            }
            return res.status(200).send(user[0])
        }
        if (type == "S") {
            const user = await SUser.find({ SerialNo: userId })
            if (user.length==0) {
                return res.status(400).send({
                    message: "Failed ! user id  doesn't exist"
                });
            }
            return res.status(200).send(user[0])
        }
        if (type == "P") {
            const user = await PUser.find({ SerialNo: userId })
            if (user.length==0) {
                return res.status(400).send({
                    message: "Failed ! user id  doesn't exist"
                });
            }
            return res.status(200).send(user[0])
        }
        if (type == "SP") {
            const user = await SPUser.find({ SerialNo: userId })
            if (user.length==0) {
                return res.status(400).send({
                    message: "Failed ! user id  doesn't exist"
                });
            }
            return res.status(200).send(user[0])
        }
        return res.status(200).send({
            msg: "Not able to find"
        })
    } catch (err) {
        console.log("Internal error ", err.message);
        res.status(500).send({
            message: "Some internal error while sigin"
        })
    }

}
// Using This Logic we can find all user who has taken loan
exports.findUserTakenLoan = async (req, res) => {
    try {
        const susers = await SUser.find();
        const gusers = await GUser.find();
        const pusers = await PUser.find();
        const spusers = await SPUser.find();
        let result = [];
        susers.forEach(user => {
            if (user.LoanStatus > "0") {
                result.push(user);
            }
        })
        gusers.forEach(user => {
            if (user.LoanStatus > "0") {
                result.push(user);
            }
        })
        pusers.forEach(user => {
            if (user.LoanStatus > "0") {
                result.push(user);
            }
        })
        spusers.forEach(user => {
            if (user.LoanStatus > "0") {
                result.push(user);
            }
        })
        let finalOutput = [];
        result.forEach(user => {
            finalOutput.push({
                SerialNo: user.SerialNo,
                Name: user.Name,
                MobileNumber: user.MobileNumber,
                MemberType: user.MemberType,
                LoanStatus: user.LoanStatus,
                Comment: user.Comment,
               // Address: user.Address

            });
        });
        res.status(200).send(finalOutput)
    } catch (err) {
        console.log("Internal error ", err.message);
        res.status(500).send({
            message: "Some internal error while sigin"
        })
    }

}
// using this logic we can find all user whose montgly amount  is pending
exports.findUserWhosemontlyAmountIsPending = async (req, res) => {
    try {
        const susers = await SUser.find();
        const gusers = await GUser.find();
        const pusers = await PUser.find();
        const spusers = await SPUser.find();

        let result = [];
        susers.forEach(user=>{
            let joiningDate = user.JoiningDate
            var past_date = new Date(joiningDate);
            var current_date = new Date(); 
            var difference = (current_date.getFullYear() * 12 + current_date.getMonth()) - (past_date.getFullYear() * 12 + past_date.getMonth()) + 1;
            if(user.ActiveMonth < difference){
                user.duesMonth=user.ActiveMonth-difference
                result.push(user)
            }
            
        })
        gusers.forEach(user=>{
            let joiningDate = user.JoiningDate
            var past_date = new Date(joiningDate);
            var current_date = new Date(); 
            var difference = (current_date.getFullYear() * 12 + current_date.getMonth()) - (past_date.getFullYear() * 12 + past_date.getMonth()) + 1;
            if(user.ActiveMonth < difference){
                user.duesMonth=user.ActiveMonth-difference
                result.push(user)
            }
            
            
        })
        pusers.forEach(user=>{
            let joiningDate = user.JoiningDate
            var past_date = new Date(joiningDate);
            var current_date = new Date(); 
            var difference = (current_date.getFullYear() * 12 + current_date.getMonth()) - (past_date.getFullYear() * 12 + past_date.getMonth()) + 1;
            if(user.ActiveMonth < difference){
                user.duesMonth=user.ActiveMonth-difference
                result.push(user)
            }
            
        })
        spusers.forEach(user=>{
            let joiningDate = user.JoiningDate
            var past_date = new Date(joiningDate);
            var current_date = new Date(); 
            var difference = (current_date.getFullYear() * 12 + current_date.getMonth()) - (past_date.getFullYear() * 12 + past_date.getMonth()) + 1;
            if(user.ActiveMonth < difference){
                user.duesMonth=user.ActiveMonth-difference
                result.push(user)
            }
            
        })
        let finalOutput = [];
        result.forEach(user => {
            finalOutput.push({
                SerialNo: user.SerialNo,
                Name: user.Name,
                MobileNumber: user.MobileNumber,
                DuesMonth : user.duesMonth
            });
        });
        res.status(200).send({
            "total ":finalOutput.length,
            "details":finalOutput
        })
    } catch (err) {
        console.log("Internal error ", err.message);
        res.status(500).send({
            message: "Some internal error while sigin"
        })
    }

}


/*
exports.findUserTakenLoan = async (req, res) => {
    try {
        const susers = await SUser.find();
        const gusers = await GUser.find();
        const pusers = await PUser.find();
        const spusers = await SPUser.find();
        let result = [];




        susers.forEach(user => {
          
                result.push(user);
          
        })
        gusers.forEach(user => {
          
                result.push(user);
         
        })
        pusers.forEach(user => {
          
                result.push(user);
          
        })
        spusers.forEach(user => {
          
                result.push(user);
           
        })
        let finalOutput = [];
        // result.forEach(user => {
        //     finalOutput.push({
        //         SerialNo: user.SerialNo,
        //         Name: user.Name,
        //         MobileNumber: user.MobileNumber,
        //         MemberType: user.MemberType,
        //         LoanStatus: user.LoanStatus,
        //         Comment: user.Comment,
        //        // Address: user.Address

        //     });
        // });


        result.forEach(user => {
            finalOutput.push({
                SerialNo: user.SerialNo,
                Name: user.Name,
                MobileNumber: user.MobileNumber,
                ActiveMonth:user.ActiveMonth
               // Address: user.Address

            });
        });

        res.status(200).send(finalOutput)
    } catch (err) {
        console.log("Internal error ", err.message);
        res.status(500).send({
            message: "Some internal error while sigin"
        })
    }

}
*/