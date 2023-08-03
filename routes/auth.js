const {login} = require("../controllers/auth")

// only gives amount
module.exports = (app=>{
    app.post("/ssf/login",login); // done

})
