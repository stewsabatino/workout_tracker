const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                required: "You need to add in a type"
            },
            name: {
                type: String,
                required: "You need to add in a name"
            },
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number,
        }
    ]
},
{
    toJSON: {
        virtuals: true,
    }
}
);

WorkoutSchema.virtual("totalDuration").get(function () {
    const duration = this.exercises.reduce((acc, cur) => {
        return acc + curr.duration;
    }, 0);

    return duration;
});

const Workout = mongoose.model("Workout", WorkoutSchema)

module.exports = Workout