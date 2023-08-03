const findController = require("../controllers/findLogic")
 // gives all details
module.exports = (app=>{
    app.post("/ssf/showUserDetails",findController.findOneUserDetails); // Done
    app.post("/ssf/loanTakenUserDetals",findController.findUserTakenLoan); // Done 
    app.get("/ssf/findUserWhosemontlyAmountIsPending",findController.findUserWhosemontlyAmountIsPending);
})