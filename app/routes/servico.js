module.exports = function(app){

  app.get('/api/v1/servico', function(req, res) {
    app.app.controllers.servico.servico(app, req, res);
  });
};
