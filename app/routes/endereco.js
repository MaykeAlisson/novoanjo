module.exports = function(app) {
  // recebe req url
  app.get('/eventos', function(req, res) {
    // envoca o metodo eventos na classe eventos
    app.app.controllers.eventos.eventos(app, req, res);
  });

  // recebe req url
  app.get('/novo-evento', function(req, res) {
    // envoca o metodo novo evento na classe eventos
    app.app.controllers.eventos.novoEvento(app, req, res);
  });

  // recebe req url
  app.post('/novo-evento', function(req, res) {
    // envoca o metodo novo evento na classe eventos
    app.app.controllers.eventos.novoEventoRegister(app, req, res);
  });
};
