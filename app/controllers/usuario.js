module.exports = {

  cadastro(app, req, res) {

    const usuario = {
      nome: req.body.nome,
      sexo: req.body.sexo,
      nascimento: req.body.nascimento,
      id_perfil: req.body.id_perfil,
      id_servico: req.body.id_servico
    };

    const endereco = {
      estado: req.body.estado,
      cidade: req.body.cidade,
      vizinhanca: req.body.vizinhanca,
      rua: req.body.rua,
      numero: req.body.numero,
      complemento: req.body.complemento,
      id_usuario: null
    };

    const telefone = {
      numero: req.body.numero,
      id_usuario: null
    };

    const login = {
      email: req.body.email,
      senha: req.body.senha,
      id_usuario: null
    };

    try {
      // Id do usuario que acaba de ser inserido
      const id_usuario = app.app.model.usuario.cadastro(usuario);
      endereco.id_usuario = id_usuario;
      telefone.id_usuario = id_usuario;
      login.id_usuario = id_usuario;
      app.app.model.endereco.cadastro(endereco);
      app.app.model.telefone.cadastro(telefone);
      app.app.model.login.cadastro(login);
      res.status(301).redirect('/');
    }catch (e) {
      res.status(500).json(e);
    }

  },

  atualiza(app, req, res){

    const usuario = {
      id_usuario: req.body.id_usuario,
      nome: req.body.nome,
      sexo: req.body.sexo,
      nascimento: req.body.nascimento,
      id_perfil: req.body.id_perfil,
      id_servico: req.body.id_servico
    };

    const endereco = {
      id_endereco: req.body.id_endereco,
      estado: req.body.estado,
      cidade: req.body.cidade,
      vizinhanca: req.body.vizinhanca,
      rua: req.body.rua,
      numero: req.body.numero,
      complemento: req.body.complemento,
      id_usuario: req.body.id_usuario
    };

    const telefone = {
      id_telefone: req.body.id_telefone,
      numero: req.body.numero,
      id_usuario: req.body.id_usuario
    };

    try {
      app.app.model.usuario.atualiza(usuario);
      app.app.model.endereco.atualiza(endereco);
      app.app.model.telefone.atualiza(telefone);
      res.status(301).redirect('/api/v1/usuario/perfil');
    }catch (e) {
      res.status(500).json(e)
    }

  },

  perfil(app, req, res){

    const restrito = {
      error: 'Area Restrita'
    };

    if(req.userPerfil !== 2)
      res.status(401).json(restrito);

    const dados = app.app.model.usuario.perfil(req);

    res.status(200).json(dados);
    
  },

  login(app, req, res){

    const usuario = app.app.model.usuario.login(req);

    if (usuario === null){
      res.status(500).json({
        success: false,
        message: 'Autenticação do Usuário falhou. E-mail ou Senha incorreta!'
      });
    }else{
      require("dotenv-safe").config();
      const jwt = require('jsonwebtoken');
      const token = jwt.sign({usuario}, process.env.SECRET, {
        expiresIn: '6h'
      });

      res.status(200).send(token);
    }

  }

};
