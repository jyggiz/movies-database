const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const PORT = 4000;

const app = express();

mongoose
    .connect('mongodb://localhost/tvmazeapp')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.use(cors());

app.use(express.static(path.join(__dirname, 'client/public'), { maxAge: 1 }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use('/api', require('./server/routes'));

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
