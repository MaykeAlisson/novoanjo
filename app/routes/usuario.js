module.exports = function(app) {

  const verifyJWT = require('../../config/jwt').verifyJWT;

  app.post('/api/v1/usuario/cadastro', function(req, res) {
    app.app.controllers.usuario.cadastro(app, req, res);
  });

  app.post('/api/v1/usuario/atualiza', verifyJWT, (req, res, next) => {
    app.app.controllers.usuario.atualiza(app, req, res, next);
  });

  app.get('/api/v1/usuario/perfil', verifyJWT, (req, res, next) =>  {
    app.app.controllers.usuario.perfil(app, req, res, next);

  app.post('/api/v1/usuario/atualiza', function(req, res) {
    app.app.controllers.usuario.atualiza(app, req, res);
  });

  app.get('/api/v1/usuario/perfil', function(req, res) {
    app.app.controllers.usuario.perfil(app, req, res);
  });

  app.post('/api/v1/usuario/login', function (req, res) {
    app.app.controllers.usuario.login(app, req, res);
  });
};
