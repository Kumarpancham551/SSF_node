const tAMW = require("../models/totalAmountMonthWise");


module.exports.monthWiseAmount = async(req,res)=>{
try{
    const data ={
        MonthYear : req.body.MonthYear,
        SavingAmount : req.body.SavingAmount
        }
        const result = await tAMW.create(data);
        res.status(200).send(result);
}catch(err){
 return res.status(500).send({
    msg:"some internal error"
 });
}
}