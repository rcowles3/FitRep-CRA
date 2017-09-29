var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BackToBasicsSchema = new Schema({
    workoutWeek: {
        type: String
        // required: true
    },
    workoutDay: {
        type: String
        // required: true
    },
    exercises: {
        type: String
        // required: true
    }, 
    sets: {
        type: String
        // required: true
    },
    reps: {
        type: String
        // required: true
    },
    proTip: {
        type: String
    }
});

var BackToBasics = mongoose.model("BackToBasics", BackToBasicsSchema);

module.exports = BackToBasics;