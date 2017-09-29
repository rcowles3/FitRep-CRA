var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ProfileSchema = new Schema({

	firstName: {
		type: String,
		required: true
	},

	lastName: {
		type: String,
		required: true
	},

	username: {
	    type: String,
	    trim: true,
	    required: "Username is Required"
    },
  // password is a string. We will trim any trailing whitespace. It's also required
  // It has a custom validate function that checks the length of the input
  // If it's less than six chars, mongoose will throw an error
    password: {
	    type: String,
	    trim: true,
	    required: "Password is Required",
	    validate: [
	      function(input) {
	        return input.length >= 6;
      },
      "Password should be longer."
      ]
    },
  // email is a string, and it must be a unique one in our collection
  // Notice how it must match our regex, which checks for email
    email: {
       type: String,
       unique: true,
       match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
    },
    
    age: {
		type: Number,
		required: true
	},

	heightft: {
		type: Number,
		required: true
	},

	heightin: {
		type: Number,
		required: true,
	}

	weight: {
		type: Number,
		required: true
	},

	gender: {
		type: String, 
		required: true
	},

	userCreated: {
       type: Date,
       default: Date.now
    },


});

var Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile; 