module.exports = function (app) {
  // Recebendo req url /
  app.get('/', function (req, res) {
    // Envoca metodo home na classe controllers index
    app.app.controllers.index.home(app, req, res);
  });

  // recebe req url
  app.get('/quero-ajuda', function(req, res){
    // envoca o metodo eventos na classe eventos
    app.app.controllers.queroAjuda.queroAjuda(app, req, res);
  });
};
