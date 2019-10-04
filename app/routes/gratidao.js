module.exports = function(app){

  const verifyJWT = require('../../config/jwt').verifyJWT;

  app.post('/api/v1/gratidao/cadastro', verifyJWT, (req, res, next) => {
    app.app.controllers.gratidao.cadastro(app, req, res, next);
  });

  app.get('/api/v1/gratidao', function(req, res) {
    app.app.controllers.gratidao.gratidao(app, req, res);
  });

  app.post('/api/v1/gratidao/atualiza', verifyJWT, (req, res, next) => {
    app.app.constrollers.gratidao.atualiza(app, req, res, next);
  });

  app.delete('/api/v1/gratidao/deleta?id=', verifyJWT, (req, res, next) => {
    app.app.controllers.graditao.deleta(app, req, res, next);
  });

  app.get('/api/v1/gratidao/por-usuario', verifyJWT, (req, res, next) => {
    app.app.controllers.graditao.buscaPorUsuario(app, req, res, next);
  });

};
