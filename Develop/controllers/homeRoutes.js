const router = require('express').Router();
const { Workout, Exercise } = require('../models')
db = require('../models')

router.get('/', (req, res) => {
    db.Workout.find({})
})