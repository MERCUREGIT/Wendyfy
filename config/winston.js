const winston = require('winston');
// creates a new Winston Logger
const logger = new winston.createLogger({
  level: 'error', 
  transports: [
    new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
    new winston.transports.Console()
  ],
  exitOnError: false,
  format:winston.format.combine( winston.format.colorize({all:true}), winston.format.simple()),
});
module.exports = logger;