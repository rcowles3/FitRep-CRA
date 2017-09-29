var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Exercises = new Schema({
  workoutType: {
    type: String,
    required: true
  },
  workoutTitle: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  workoutTips: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Exercises', Exercises);
