const isEmpty = require('./isEmpty');

module.exports = (value = {}) => !isEmpty(value);
