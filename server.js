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

// Use middlewares to set view engine and post json data to the server
app.options('*', cors()); // include before other routes
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up a static folder (public) for our web app
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//allow for client to make calls to the server

app.use(function (req, res, next) {
  
      // Website you wish to allow to connect
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  
      // Request methods you wish to allow
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
      // Request headers you wish to allow
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
      // Set to true if you need the website to include cookies in the requests sent
      // to the API (e.g. in case you use sessions)
      res.setHeader('Access-Control-Allow-Credentials', true);
  
      // Pass to next layer of middleware
      next();
  });
//Database configuration with mongoose
var localDeploy = "mongodb://localhost:27017/FitRep";
var herokuDeploy = 'mongodb://heroku_qls9xw3z:9kclrucuf2af6stvk0engod2s0@ds157584.mlab.com:57584/heroku_qls9xw3z';

//mongoose.connect
mongoose.connect(herokuDeploy,
  {
    useMongoClient: true
  });
const db = mongoose.connection;

//Show any mongoose errors
db.on("error", function (error) {
  console.log("Mongoose Error: ", error);
});

//Log success message once logged into mongoose
db.once("open", function () {
  console.log("Mongoose connection successful.");
});

// get all data from back to basics in local db
// app.get("/b2b", function(req, res){
//   console.log("I am in the server route");
//   BackToBasics.find({}).sort([
//     ["_id", "descending"]
//   ]).limit(5).exec(function (err, doc) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       console.log("I hit my b2b route", doc);
//       res.send(doc);
//     }
//   });

// });

//get all data from back to basics in local db
// app.get("/maxed", function (req, res) {
//   // console.log("what is in my request? ", req);
//   MaxedOutMuscle.find({}).sort([
//     ["_id", "descending"]
//   ]).limit(5).exec(function (err, doc) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.send(doc);
//     }
//   });

// });

// Route Handlers
const dataScrape = require("./routes/dataScrape");
const userRoutes = require("./routes/userRoutes");
app.use("/api", dataScrape);
app.use("/users", userRoutes);


//----------------------------------------------------------------
// Listener
app.listen(PORT, function () {
  console.log('Server is running on Port: ', PORT);
});