const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const router = express.Router();
const apiUrl = 'http://api.tvmaze.com';
const axios = require('axios');
const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost/tvmazeapp')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.json());


app.use('/api', require('./routes'));


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
