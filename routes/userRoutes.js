/**
 * Route to handle account creation, as well as our API
 * calls for displaying user data
 * will be secure, eventually. 
 */

let express = require('express');
let app = express();
let userRouter = express.Router();
let cors = require('cors');
let bodyParser = require('body-parser');

// Use middlewares to set view engine and post json data to the server
app.all('/*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');
    next();
});

let CreateUser = require('../models/CreateUser');

userRouter.route('/create').post((req, res) => {
    // console.log("REQUEST: \n\n", "===".repeat(20), "\n\n", req.body);
    // console.log("RESULT: \n\n", "===".repeat(20), res);
    let reqObj = req.body.CreateUser;
    let user = new CreateUser(reqObj);
    // console.log("User Obj: \n", "===".repeat(20), "\n\n", reqObj, "\n\n");
    user.save()
        .then(user => {
            res.status(200);
        })
        .catch(err => {
            res.status(400).send("Sorry, please try again, unable to create new user.")
        });
});

userRouter.route("/authenticate").post((req, res) => {
    let loginInfo = req.body.loginInfo;
    // console.log(loginInfo, "Route Hit!");
    let user = CreateUser(loginInfo);
    console.log(user);

    auth = (err, info, doc) => {
        if (err) throw err;
        console.log("\n\n\nReturned data from DB", info);  
        res.json(info);
    }

    CreateUser.
        findOne().
        where('user_name').equals(user.user_name).        
        where('pass_word').equals(user.pass_word).
        limit(1).
        select('first_name').
        exec(auth); // where callback is the name of our callback function.     
});


module.exports = userRouter;