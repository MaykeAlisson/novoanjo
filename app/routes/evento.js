module.exports = function(app){

  const verifyJWT = require('../../config/jwt').verifyJWT;

  app.get('/api/v1/evento', verifyJWT, (req, res, next) => {
    app.app.controllers.evento.buscaEventos(app, req, res, next);
  });

};
