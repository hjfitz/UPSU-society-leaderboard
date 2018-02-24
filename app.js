/**
 * required for express
 */
const express = require('express');
const path = require('path');
const compression = require('compression')();
const helmet = require('helmet')();
const cors = require('cors')();
const exphbs = require('express-handlebars');

/**
 * express routers
 */
const scraper = require('./src/scraper');
const { log, morgan } = require('./src/logger');

/**
 * app vars
 */
const app = express();
const pub = path.join(__dirname, 'public');

/**
 * express middleware
 */
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(morgan);
app.use(helmet);
app.use(cors);
app.use(compression);
app.use('/public', express.static(pub));
app.use('/', scraper);

/**
 * This middle must be the last one set up
 * used for react - enables client-side routing
 */

log('debug', 'app.js', 'express initialised');

// export for bin/www
module.exports = app;
