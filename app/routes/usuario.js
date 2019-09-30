module.exports = function(app) {
  // recebendo req url
  app.post('/api/v1/usuario/cadastro', function(req, res) {
    // Envoca metodo usuario na classe usuario
    app.app.controllers.usuario.cadastro(app, req, res);
  });
};
