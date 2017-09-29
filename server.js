// Dependencies
var express = require("express");
var mongojs = require("mongojs");
var cheerio = require("cheerio");
var request = require("request");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
//include my models with database schema
var BackToBasics = require("./models/BackToBasics");
var MaxedOutMuscle = require("./models/MaxedOutMuscle");
var Item = require("./models/Item");

//var Saved = require("./models/saved");

//Leverage built in JS ES6 Promises
mongoose.Promise = Promise;

var PORT = process.env.PORT || 4200;

// Initialize Express
var app = express();


// Set up a static folder (public) for our web app
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Database configuration with mongoose
//mongoose.connect("mongodb://heroku_fpl41ksr:pqc91djlcafhpjj9m4rr5g34ih@ds121674.mlab.com:21674/heroku_fpl41ksr",
mongoose.connect("mongodb://localhost:27017/FitRep",
{
  useMongoClient: true
});
const db = mongoose.connection;


//Show any mongoose errors
db.on("error", function(error){
  console.log("Mongoose Error: ", error);
});

//Log success message once logged into mongoose
db.once("open", function(){
  console.log("Mongoose connection successful.");
});

//get all data from back to basics in local db
app.get("/b2b", function(req, res){
   // console.log("what is in my request? ", req);
   BackToBasics.find({}).sort([
    ["_id", "descending"]
  ]).limit(5).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
   
});

//get all data from back to basics in local db
app.get("/maxed", function(req, res){
    // console.log("what is in my request? ", req);
    MaxedOutMuscle.find({}).sort([
     ["_id", "descending"]
   ]).limit(5).exec(function(err, doc) {
     if (err) {
       console.log(err);
     }
     else {
       res.send(doc);
     }
   });
    
 });

// Use middlewares to set view engine and post json data to the server
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route Handlers
// const dataScrape = require("./routes/dataScrape");
const userRoutes = require("./routes/userRoutes");
// app.use("/api", dataScrape);
app.use("/users", userRoutes);


//----------------------------------------------------------------
// Listener
app.listen(PORT, function () {
    console.log('Server is running on Port: ', PORT);
  });