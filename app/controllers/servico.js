module.exports = {

  servico(app, req, res){
    try {
      res.json(app.app.model.servico.servico());
    }catch (e) {
      res.json(e)
    }

  }

};
