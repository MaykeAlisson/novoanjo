module.exports = {

  servico(app, req, res){
    try {
      res.status(200).json(app.app.model.servico.servico());
    }catch (e) {
      res.status(500).json(e)
    }

  },

  cadastro(app, req, res){
    const servico = req.body;

    try {
      app.app.model.servico.cadastro(servico);
      res.status(201).send('servico cadastrado');
    }catch (e) {
      res.status(500).send('erro');
    }

  },

  atualiza(app, req, res){
    const servico = req.body;

    try {
      app.app.model.servico.atualiza(servico);
      res.status(200).send('Atualizado com sucesso');
    }catch (e) {
      res.status(500).send('erro');
    }

  },

  delete(app, req, res){
    const idServico = req.query.id;

    try {
      app.app.model.servico.delete(idServico);
      res.status(200).send('servico deletado');
    }catch (e) {
      res.status(500).send('erro');
    }

  }

};
