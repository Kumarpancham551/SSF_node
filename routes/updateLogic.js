const updateController = require("../controllers/updateLogic")
 // update details
module.exports = (app=>{
    app.patch("/ssf/updateMonthlyPaymentOfAllUser",updateController.updateAllUser); // Done
    app.patch("/ssf/updateOneUserDetails",updateController.updateOneUser); // Done
})
/*
update all user

{
    "SerialNo":["3G","4G","5G","7G","10G"], // iska detail update nii krega
    "MemberType":"G"
}

{
    "SerialNo":["12","15","20","21","23","27","28","42","43","44","46","47","55","56"], // iska detail update nii krega
    "MemberType":"S"
}

*/