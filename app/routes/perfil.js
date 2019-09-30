module.exports = function (app) {
  // recebendo req url
  app.get('/sobre', function (req, res) {
    // Envoca metodo sobre na classe sobre
    app.app.controllers.sobre.sobre(app, req, res);
  });
}