const express = require('express');
const router = express.Router();
const apiUrl = 'http://api.tvmaze.com';
const axios = require('axios');

router.get('/show/:id', (async (req, res) => {
    const { params: { id } } = req;
    const response = await axios.get(`${apiUrl}/shows/${id}?embed=cast`);
    const { data } = response;
    res.status(200).send(data);
}));

router.get('/shows/pages/:page', (async (req, res) => {
    const { params: { page } } = req;
    const response = await axios.get(`${apiUrl}/shows?page=${page}`);
    const { data } = response;
    res.status(200).send(data);
}));

module.exports = router;
