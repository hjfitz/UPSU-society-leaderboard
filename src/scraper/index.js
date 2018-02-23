const express = require('express');
const populateList = require('./scrape');
const { log } = require('../logger');

let leaderboard = [];

(async () => {
  log('info', 'IIFE', 'Initialising leaderboard');
  const list = await populateList();
  log('info', 'IIFE', 'initial scrape complete');
  leaderboard = list;
})();

setInterval(async () => {
  log('info', 'Interval', 'Beginning scrape...');
  const list = await populateList();
  log('info', 'Interval', 'Scrape complete');
  leaderboard = list;
}, 180000);

const scraper = express.Router();

scraper.get('/', (req, res) => {
  res.render('leaderboard', { leaderboard });
});

module.exports = scraper;
