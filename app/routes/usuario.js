module.exports = function(app) {
  // recebendo req url
  app.get('/usuario/:idUsuario', function(req, res) {
    // Envoca metodo usuario na classe usuario
    app.app.controllers.usuario.usuario(app, req, res, req.params.idUsuario);
  });
};
