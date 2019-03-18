module.exports = function(app){
  // recebe req url
  app.get('/quem-apoiamos', function(req, res){
    // envoca metodo quem-somes na classe quemSomos
    app.app.controllers.quemSomos.quemSomos(app, req, res);
  });
}
