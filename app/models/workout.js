const mongoose = require('mongoose')

const workoutSchema = new mongoose.Schema({
  workoutCategory: {
    type: String,
    required: true
  },
  targetedBodyArea: {
    type: String,
    required: true
  },
  timeSpent: {
    type: Number,
    required: true
  },
  caloriesBurned: {
    type: Number,
    required: true
  },
  workoutDate: {
    type: Date,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Workout', workoutSchema)
