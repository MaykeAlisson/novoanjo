module.exports = function(app) {

  app.post('/api/v1/usuario/cadastro', function(req, res) {
    app.app.controllers.usuario.cadastro(app, req, res);
  });

  app.post('/api/v1/usuario/atualiza', function(req, res) {
    app.app.controllers.usuario.atualiza(app, req, res);
  });

  app.get('/api/v1/usuario/perfil', function(req, res) {
    app.app.controllers.usuario.perfil(app, req, res);
  });

};
