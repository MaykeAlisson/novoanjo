function EnderecoDAO(connection) {
  this._connection = connection;
}

const mysql = require('mysql');

EnderecoDAO.prototype.busca = function (idUsuario, callback) {
  let query = `SELECT *
               FROM categoria
               WHERE id_usuario = ${mysql.escape(idUsuario)}`;
  this._connection.query(query, callback);
};

EnderecoDAO.prototype.cadastro = function (categoria, callback) {
  let query = `INSERT INTO categoria
               (descricao, operacao, id_usuario, criacao)
               VALUES(${mysql.escape(categoria.descricao)}, ${mysql.escape(categoria.operacao)}, ${mysql.escape(categoria.id_usuario)}, CURRENT_TIMESTAMP)`;
  this._connection.query(query, categoria, callback);
};

module.exports = function () {
  return EnderecoDAO;
};
