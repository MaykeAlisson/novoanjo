module.exports = function(app){

  const verifyJWT = require('../../config/jwt').verifyJWT;

  app.get('/api/v1/servico', function (req, res) {
    app.app.controllers.servico.servico(app, req, res);
  });

  app.post('/api/v1/servico/cadastro', verifyJWT, (req, res, next) => {
    app.app.controllers.servico.cadastro(app, req, res, next);
  });

  app.post('/api/v1/servico/atualiza', verifyJWT, (req, res, next) => {
    app.app.controllers.servico.atualiza(app, req, res, next);
  });

  app.delete('/api/v1/servico/delete', verifyJWT, (app, req, res, next) => {
    app.app.controllers.servico.delete(app, req, res, next);
  });
  
};
