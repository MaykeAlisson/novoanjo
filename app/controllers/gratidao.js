module.exports = {

  cadastro(app, req, res){

    try {
      const gratidao = req.body;
      app.app.model.gratidao.cadastro(gratidao);
      res.status(201).send('Gratidao cadastrada');
    }catch (e) {
      res.status(500).send('erro');
    }

  },

  gratidao(app, req, res){

    try {
      const gratidao = app.app.model.gratidao.gratidao();
      res.status(200).send('lista de gratidao');
    }catch (e) {
      res.status(500).send('erro');
    }

  },

  atualiza(app, req, res){

    try {
      const gratidao = req.body;
      app.app.model.gratidao.atualiza(gratidao);
      res.status(200).send('Atualizado');
    }catch (e) {
      res.status(500).send('erro');
    }

  },

  deleta(app, req, res){

    try {
      const idGratidao = req.query.id;
      app.app.model.gratidao.delete(idGratidao);
      res.status(200).send('Registro deletado');
    }catch (e) {
      res.status(500).send('erro');
    }

  },

  buscaPorUsuario(app, req, res){

    try {
      const idUsuario = req.userId;
      const gratidao = app.app.model.gratidao.buscaPorUsuario(idUsuario);
      res.status(200).send('lista de gratidao do usuario');
    }catch (e) {
      res.status(500).send('erro');
    }

  }

};
