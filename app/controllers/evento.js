module.exports = {

  buscaEventos(app, req, res) {

    try {
      const eventos = app.app.model.evento.buscaEventos();
      res.status(200).send('Lista Enventos por cidade');
    }catch (e) {
      res.status(500).send('erro');
    }

  },

  cadastro(app, req, res) {

    try {
      const evento = req.body;
      app.app.model.evento.cadastro(evento);
      res.status(201).send('Evento sera avaliada, se tudo estiver ok sera liberado');
    }catch (e) {
      res.status(500).send('erro');
    }

  },

  atualiza(app, req, res) {

    try {
      const evento = req.body;
      app.app.model.evento.atualiza(evento);
      res.status(200).send('Evento');
    }catch (e) {
      res.status(500).send('erro');
    }

  },

  buscaEventosNaoLiberado(app, req, res) {

    try {
      const eventos = app.app.model.evento.buscaEventosNaoLiberado();
      res.status(200).send('Lista de Eventos nao Liberados');
    }catch (e) {
      res.status(500).send('erro');
    }

  },

  libera(app, req, res) {

    try {
      const evento = 0;
      app.app.model.evento.libera(evento);
      res.status(200).send('evento liberado');
    }catch (e) {
      res.status(500).send('erro');
    }

  },

  buscaPorCidade(app, req, res){

    try {
      const idUsuario = req.userPerfil;
      const cidade = app.app.model.endereco.buscaCidadeDoUsuario(idUsuario);
      const eventos = app.app.model.evento.buscaPorCidade(cidade);
      res.status(200).send('eventos cidade usuario');
    }catch (e) {
      res.status(500).send('erro')
    }

  }

};
