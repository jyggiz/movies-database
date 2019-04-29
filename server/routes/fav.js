const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', (async (req, res) => {
    const { body } = req;
    console.log("body", body);
    const status = await db.favorites.addShowToFavs(body);
    res.status(status).send({ status });
}));

router.get('/', (async (req, res) => {
    const result = await db.favorites.getFavsShows();
    res.status(200).send(result);
}));

router.get('/:id', (async (req, res) => {
    const { params } = req;
    const { id } = params;
    await db.favorites.deleteFavShow({id});
    res.status(200).end();
}));

module.exports = router;
