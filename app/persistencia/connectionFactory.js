const mysql = require('mysql');

function createDBConnection(){
  return mysql.createConnection({
    host: process.env.db_host || 'localhost',
    user: process.env.db_user || 'root',
    password: process.env.db_senha || 'jesus',
    database: 'novoanjo'
  });
}

module.exports = function () {
  return createDBConnection;
};
