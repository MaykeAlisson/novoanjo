module.exports = function(app){

  const verifyJWT = require('../../config/jwt').verifyJWT;

  app.get('/api/v1/servico', verifyJWT, (req, res, next) => {
    app.app.controllers.servico.servico(app, req, res, next);
  });

};
