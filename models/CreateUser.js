const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');


const CreateUser = new Schema({
    first_name: {
        type: String
        // required: true
    },
    last_name: {
        type: String
        // required: true
    },
    uEmail: {
        type: String
        // required: true
    }, 
    height_ft: {
        type: String
        // required: true
    },
    height_in: {
        type: String
        // required: true
    },
    uWeight: {
        type: String
        // required: true
    },
    uAge: {
        type: Number
        // required: true
    },
    user_name: {
        type: String
        // required: true
    },
    pass_word: {
        type: String
        // required: true
    }
});

// let CreateUser = mongoose.model("Users", CreateUserSchema);


// module.exports = CreateUser;
CreateUser.plugin(passportLocalMongoose);

module.exports = mongoose.model('Users', CreateUser);