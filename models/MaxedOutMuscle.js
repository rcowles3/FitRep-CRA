let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const MaxedOutMuscleSchema = new Schema({
    excersiseType: {
        type: String
        // required: true
    },
    excersiseNo: {
        type: String
        // required: true
    },
    exercise: {
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
    img: {
        type: String
    }
});

let MaxedOutMuscle = mongoose.model("MaxedOutMuscle", MaxedOutMuscleSchema);

module.exports = MaxedOutMuscle;