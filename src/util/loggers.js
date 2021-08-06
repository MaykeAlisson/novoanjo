const winston = require('winston');
const fs = require('fs');

if (!fs.existsSync('logs')){
    fs.mkdirSync('logs');
}

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({
            filename: 'logs/novoAnjo.log',
            level: 'error',
            maxsize: 102400, //100MB
            maxFiles: 10
        }),
    ],
});

module.exports = logger;
