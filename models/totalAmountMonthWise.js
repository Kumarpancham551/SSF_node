const mongose = require('mongoose');
const userSchema = new mongose.Schema({
    MonthYear:{
        type:String 
    },
    SavingAmount:{
        type:String,
    },
    
},{ timestamps : true , versionKey : false})

module.exports =  mongose.model("toalAmountMonthWise",userSchema);