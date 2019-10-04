module.exports = {

  cadastro(app, req, res){

    if (req.userPerfil !== 3)
      res.status(401).send('Acesso não liberado');

    try {
      const mensagem = req.body;
      app.app.model.mensagem.cadastro(mensagem);
      res.status(201).send('mensagem cadastrada');
    }catch (e) {
      res.status(500).send('erro');
    }

  },

  atualiza(app, req, res){

    if (req.userPerfil !== 3)
      res.status(401).send('Acesso não liberado');

    try {
      const mensagem = req.body;
      app.app.model.mensagem.atualiza(mensagem);
      res.status(200).send('Mensagemm atualizada');
    }catch (e) {
      res.status(500).send('erro');
    }

  },

  mensagem(app, req, res){

    if (req.userPerfil !== 3)
      res.status(401).send('Acesso não liberado');

    try {
      const mensagem = app.app.model.mensagem.mensagem();
      res.status(200).send('retorna mensagem');
    }catch (e) {
      res.status(500).send('erro');
    }

  },

  buscaPorUsuario(app, req, res){

    const idUsuario = req.userId;

    try {
      const mensagem = app.app.model
    }catch (e) {
      res.status(500).send('erro');
    }
  }


};
