function UsuarioRepository(connection) {
  this._connection = connection;
}
const mysql = require('mysql');

UsuarioRepository.prototype.buscaPorcentagemTodasCategoria = function (idUsuario, callback) {
  let query = `select descricao
              ,porcentagem
              ,id
              from categoria
              where id_usuario = ${mysql.escape(idUsuario)}`;
  this._connection.query(query, callback);
};

module.exports = function () {
  return UsuarioRepository;
};
