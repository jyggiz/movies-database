const express = require('express');
const router = express.Router();

router.use('/tv', require('./show'));
router.use('/fav', require('./fav'));

module.exports = router;
