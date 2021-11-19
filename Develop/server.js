const path = require('path')
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extend: true }))
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/populatedb', { useNewUrlParser: true });

app.use(require('./controllers'))
// app.use(require('./controllers/api.js'))

app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}`)
});