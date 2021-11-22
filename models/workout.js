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
            duration: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
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
        return acc + cur.duration;
    }, 0);

    return duration;
});

const Workout = mongoose.model("Workout", WorkoutSchema)

module.exports = Workout