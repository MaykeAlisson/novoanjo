const User = require('../models/User');
require("dotenv-safe").config();
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const logger = require('../infra/util/logger');
const {isEmpty} = require('../infra/util/UtilObject');
const jwt = require('jsonwebtoken');

class UsuarioController {

  async login(req, res) {

    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      let {email, senha} = req.body;

      let resultado = await User.login(email);

      if (isEmpty(resultado)){
        res.status(400).send('Email não cadastrado');
        return ;
      }

      let verificaSenha = await bcrypt.compare(senha,resultado[0].senha);

      if (!verificaSenha){
        res.status(400).json({
          success: false,
          message: 'Autenticação do Usuário falhou. E-mail ou Senha incorreta!'
        });
        return;
      }

      let usuario = {
        "id": resultado[0].id,
        "nome": resultado[0].nome,
      };

      const token = jwt.sign({usuario}, process.env.SECRET, {
        expiresIn: '8h'
      });

      const response = {
        "idUser": usuario.id,
        "userName": usuario.nome,
        "token": token
      };

      res.status(200).json(response);

    }catch (error) {
      logger.info('UsuarioController : Login ' + error);
      res.status(500).json({error: error})
    }

  };

  async create(req, res) {

    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      let hash = await bcrypt.hash(req.body.senha, 10);

      let user = {
        nome: req.body.nome,
        email: req.body.email,
        senha: hash,
        ativo: 'S'
      };

      let emailExists = await User.findEmail(user.email);

      if (emailExists){
        res.status(406).json({err: `O e-mail ${req.body.email} já esta cadastrado!`});
        return;
      }

      let resultado = await User.save(user);

      let usuario = {
        "id": resultado[0],
        "nome": req.body.nome,
      };

      const token = jwt.sign({usuario}, process.env.SECRET, {
        expiresIn: '8h'
      });

      const response = {
        "idUser": usuario.id,
        "userName": usuario.nome,
        "token": token
      };

      res.status(201).json(response);

    }catch (error) {
      logger.info('UsuarioController : Create ' + error);
      res.status(500).json({error: error})
    }

  }

}

module.exports = new UsuarioController();
