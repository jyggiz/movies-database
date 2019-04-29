const express = require('express');
const router = express.Router();

router.use('/tv', require('./show'));
router.use('/tv', require('./search'));

module.exports = router;
