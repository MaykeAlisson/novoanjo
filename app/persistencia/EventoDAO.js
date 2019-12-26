function EventoDAO(connection) {
  this._connection = connection;
}

const mysql = require('mysql');

EventoDAO.prototype.busca = function (callback) {
  let query = `SELECT *
               FROM categoria
               WHERE id_usuario = ${mysql.escape(idUsuario)}`;
  this._connection.query(query, callback);
};

module.exports = function () {
  return EventoDAO;
};


module.exports = {

  buscaEventos(){
    const eventos = [];

    return eventos;
  },

  cadastro(evento){
    //cadastra evento
  },

  atualiza(evento){
    // atualiza evento
  },

  buscaEventosNaoLiberado(){
    // lista eventos nao liberado
  },

  libera(evento){
    // libera ou nao evento com o id
  },

  buscaPorCidade(cidade){
    // lista evento na cidade do usuario
  }


};
