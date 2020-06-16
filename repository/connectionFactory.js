const mysql = require('mysql');

function createDBConnection(){
  return mysql.createPool({
    connectionLimit : 50,
    host: process.env.db_host || 'localhost',
    user: process.env.db_user || 'root',
    password: process.env.db_senha || 'jesus',
    database: 'novo_anjo'
  });
}

module.exports = function () {
  return createDBConnection;
};
