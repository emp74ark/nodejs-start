const { platform, version } = require('./os');
const logger = require('./logger');
const express = require('express');
const recordRoutes = require('./express-routes/express-record.routes');
const staticRoutes = require('./express-routes/express-static.routes');
const apiRoutes = require('./express-routes/express-api.routes');
const { styles } = require('./express-controllers/express-path.controller');
require('dotenv').config();

function expressServer() {
  const server = express();
  server.set('view engine', 'ejs');

  server.listen(process.env.PORT, '127.0.0.1', (err) => {
    err ? console.log(err) : logger.emit('info', `Start EXPRESS at ${platform}, version: ${version}`);
  });

  server.use((request, response, next) => {
    logger.emit('info', `Address: '${request.url}', port: ${process.env.PORT}, method: '${request.method}'`);
    next();
  });
  server.use(express.static(styles));
  server.use(express.urlencoded({ extended: false }));

  server.use(apiRoutes);
  server.use(recordRoutes);
  server.use(staticRoutes);

}

module.exports = expressServer();