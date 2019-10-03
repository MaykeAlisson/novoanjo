module.exports = {

  cadastro(app, req, res){

    if (req.userPerfil !== 3)
      res.status(401).send('Acesso nao liberado');

    try {
      const mensagem = req.body;
      app.app.model.mensagem.cadastro(mensagem);
      res.status(200).send('mensagem cadastrada');
    }catch (e) {
      res.status(500).send('erro');
    }

  },




};
