const mongose = require('mongoose');
// Everything must be in string formate
const userSchema = new mongose.Schema({
    SerialNo:{
        type:String 
    },
    MemberNumber:{
        type:String,
    },
    MemberType:{
        type:String, // This must be = [General,Special,premium,specialPremium]
    },
    Name:{
        type:String
    },
    MobileNumber:{
        type:String,
    },
    UIDNumber:{
        type:String,
    },
    Address:{
        type:String,
    },
    JoiningDate:{ // in this format 10-10-2022 remove 0 prefix in this format 10-10-2022 format mm-DD-yyyyy
        type:String,
    },
    LoanStatus:{
        type:String, // bydefault shold be "0". 0 menas loan not taken
    },
    GuarnterId:{
        type:String, // while given loan who was the guarnter.
    },
    LateFine:{
        type:String, // Bydefault should be '0'
    },
    ActiveMonth:{
        type:String, // minimum month 1.
    },
    JoinerId:{
        type:String,
    },
    PerformanceNumber:{
        type:String, // Performance number must be [-1,0,1,2,3]
                    // -1 = User didn't flow rule and also not given back money on time. We can't trust.
                    // 0 = normal. Not participating but also not broken any rule
                    // 1 = proper follow rule and also participating 
                    // 2 =  proper follow rule and also participating and joining members
                    // 3 = Excellent memebers
    },
    Comment:{
        type:String // Bydefault OK.
    }

},{ timestamps : true , versionKey : false})

module.exports =  mongose.model("SPUser",userSchema);

// special user means first time 1000 and every month 1000