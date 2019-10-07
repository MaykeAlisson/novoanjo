module.exports = function(app){

  const verifyJWT = require('../../config/jwt').verifyJWT;

  app.get('/api/v1/evento', function (req, res) {
    app.app.controllers.evento.buscaEventos(app, req, res);
  });

  app.post('/api/v1/evento/cadatro', function(req, res) {
    app.app.controllers.evento.cadastro(app, req, res);
  });

  app.post('/api/v1/evento/atualiza', function(req, res) {
    app.app.controllers.evento.atualiza(app, req, res);
  });

  app.get('/api/v1/evento/nao-liberado', verifyJWT, (req, res, next) => {
    app.app.controllers.evento.buscaEventosNaoLiberado(app, req, res, next);
  });

  app.post('/api/v1/evento/libera', verifyJWT, (req, res, next) => {
    app.app.controllers.evento.libera(app, req, res, next);
  });

  app.get('/api/v1/evento/busca-por-cidade', function(req, res) {
    app.app.controllers.evento.buscaPorCidade(app, req, res);
  });

};
