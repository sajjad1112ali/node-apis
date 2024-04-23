const { createLogger, format, transports } = require('winston');
const moment = require('moment');

const logToFile = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.printf((error) => `${error.timestamp} ${error.level}: ${error.message}${error.splat !== undefined ? `${error.splat}` : ' '}`),
  ),
  defaultMeta: {},
  transports: [
    new transports.File({ filename: `logs/error/${moment(new Date()).format(('MMM-DD-YYYY'))}.log`, level: 'error' }),
  ],
});

module.exports = logToFile;
