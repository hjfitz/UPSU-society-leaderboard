const express = require('express');
const populateList = require('./scrape');
const { log } = require('../logger');

const scraper = express.Router();
let leaderboard = [];

const updateLeaderboard = async () => {
  log('info', 'Interval', 'Beginning scrape...');
  const hrstart = process.hrtime();
  const list = await populateList();
  const hrend = process.hrtime(hrstart);
  const taken = `Execution time: ${hrend[0]}${(hrend[1] / 1000000)}ms`;
  log('info', 'Interval', `Scrape complete. ${taken}`);
  leaderboard = list;
};

updateLeaderboard();

setInterval(updateLeaderboard, 600000);

scraper.get('/', (req, res) => {
  res.render('leaderboard', { leaderboard });
});

scraper.get('/leaderboard', (req, res) => {
  res.json(leaderboard);
});

module.exports = scraper;
