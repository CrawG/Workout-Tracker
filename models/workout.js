const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    
date: {
    type: Date,
    default: Date.now
    },

exercises: [
    {
        type: {
            type: String,
            trim: true,
            required: "Enter a workout type"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter a name for this workout"
        },
        duration: {
            type: TimeRanges,
            required: "Enter a duration"
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        },
    }
]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;