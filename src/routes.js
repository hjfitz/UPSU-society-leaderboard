const express = require('express');
const scraper = require('./scraper');

const router = express.Router();

router.get('/scrape', scraper);

module.exports = router;
