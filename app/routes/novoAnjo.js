module.exports = function(app){
  // Recebe req url /novoanjo
  app.get('/novoanjo', function(req, res){
    // Envoca o controller novo anjo com o cadastro
    app.app.controllers.novoAnjo.index(app, req, res);
  });

  // Cadastro
  app.post('/novoanjo/cadastro', function(req, res){
    app.app.controllers.novoAnjo.cadatro(app, req, res);
  });
}
