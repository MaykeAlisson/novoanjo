module.exports = function(app){

  const verifyJWT = require('../../config/jwt').verifyJWT;

  app.post('/api/v1/mensagem/cadastro', verifyJWT, (req, res, next) => {
    app.app.controllers.mensagem.cadastro(app, req, res, next);
  });

  app.post('/api/v1/mensagem/atualiza', verifyJWT, (req, res, next) => {
    app.app.controllers.mensagem.atualiza(app, req, res, next);
  });

  app.get('/api/v1/mensagem', verifyJWT, (req, res, next) => {
    app.app.controllers.mensagem.mensagem(app, req, res, next);
  })
};
