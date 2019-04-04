module.exports = function(app){
  // Recebe req url /novoanjo
  app.get('/novoanjo', function(req, res){
    // Envoca o controller novo anjo com o cadastro
    app.app.controllers.novoAnjo.cadastro(app, req, res);
  });
}
