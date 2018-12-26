const Logger = require('./logger');
const logger = new Logger();

logger.on('logging', args => {
  console.log('Listener Called', args);
});

logger.log('This is new message');
