const calcController = require("../controllers/calculationLogic")

// only gives amount
module.exports = (app=>{
    app.get("/ssf/findTotalsavingAmount",calcController.totalAmount); // done
    app.get("/ssf/totalGivenLoan",calcController.totalLoanAmount);
})
//