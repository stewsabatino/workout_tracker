const router = require('express').Router()
const db = require('../../models')

router.get('/', (req, res) => {
    db.Workout.find({})
        .then((dbWorkouts) => {
            res.status(200).json(dbWorkouts)
        })
        .catch((err) => {
            res.status(500).json(err)
        });
});


router.post('/', (req, res) => {
    db.Workout.create({})
        .then((dbWorkout) => {
            res.status(200).json(dbWorkout);
        })
        .catch((err) => {
            res.status(500).json(err)
        });
});

router.put('/:id', (req, res) => {
    db.Workout.updateOne({
        _id: req.params.id
    },
    { 
        $push: { exercises: { ...req.body}  }
    },)
        .then(dbWorkout => {
            res.status(200).json(dbWorkout);
        })
        .catch((err) => {
            res.status(500).json(err)
        });
});


router.get('/range', (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: 
                    { $sum: '$exercise.duration'},
            }
        }
    ])
    .limit(10)
    .then((workout) => {
        res.status(200).json(workout)
    })
    .catch((err) => {
        res.status(500).json(err)
    })
})

module.exports = router