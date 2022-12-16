const EventEmitter = require('events');
const chalk = require('chalk');
const emitter = new EventEmitter();

const logger = emitter.on('info', (msg) => {
  console.log(chalk.yellow(msg));
});

module.exports = logger;
