module.exports = {

  servico(app, req, res){
    try {
      res.status(200).json(app.app.model.servico.servico());
    }catch (e) {
      res.status(500).json(e)
    }

  }

};
