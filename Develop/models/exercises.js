const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: {
        type: String,
        required: "type is required"
    },
    name: {
        type: String,
        required: "name is required"
    },
    duration: {
        type: Number,
        required: "A duration is required"
    },
    weight: {
        type: Number,
        required: "A weight is required"
    },
    reps: {
        type: Number,
        required: "Number of reps are required"
    },
    sets: {
        type: Number,
        required: "Number of sets are required"
    }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema)

module.exports = Exercise