const User = require('../models/Usuario');
require("dotenv-safe").config({
    allowEmptyValues: true
});
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const logger = require('../util/loggers');
const Jwt = require('../util/Jwt');
const isNotEmpty = require("../util/isNotEmpty");
const {error} = require("winston");
const isEmpty = require("../util/isEmpty");


class UsuarioController {

    async login(req, res) {

        try {
            const errors = validationResult(req);

            if (isNotEmpty(errors.errors)) {
                return res.status(400).json({ errors: errors.array({ onlyFirstError: true }) });
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
                "id": resultado[0].id_usuario,
                "perfil": resultado[0].perfil,
                "nome": resultado[0].nome,
            };

            const token = Jwt.create(usuario)

            const response = {
                "idUser": usuario.id,
                "userName": usuario.nome,
                "perfil": usuario.perfil,
                "token": token
            };

            return res.status(200).json(response);

        } catch (e) {
            logger.info('UsuarioController : Login ' + e);
            res.status(500).json({error: e})
        }

    };

    async create(req, res) {

        try {
            const errors = validationResult(req);

            if (isNotEmpty(errors.errors)) {
                return res.status(400).json({ errors: errors.array({ onlyFirstError: true }) });
            }

            let hash = await bcrypt.hash(req.body.senha, 10);

            let user = {
                nome: req.body.nome,
                sexo: req.body.sexo,
                nascimento: req.body.nascimento,
                email: req.body.email,
                senha: hash,
                perfil: 'A'
            };

            let emailExists = await User.findEmail(user.email);

            if (emailExists){
                res.status(400).json(`O e-mail ${req.body.email} já esta cadastrado!`);
                return;
            }

            let resultado = await User.save(user)

            let usuario = {
                "id": resultado[0],
                "perfil":user.perfil,
                "nome": req.body.nome,
            };

            const token = Jwt.create(usuario)

            const response = {
                "idUser": usuario.id,
                "userName": usuario.nome,
                "token": token
            };

            return res.status(201).json(response);

        } catch (e) {
            logger.info('UsuarioController : Login ' + e);
            res.status(500).json({error: e})
        }

    };

    async delete(req, res) {

        try {
            
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array({ onlyFirstError: true })});
            }

            let id = req.params.id;
            if (!Number.isInteger(Number(id))) {
                res.status(204).send('');
                return;
            }

            if (!id === req.userId){
                res.status(204).json(``);
                return;
            }

            return res.status(200).json('deu certo');

        }catch (e) {
            logger.info('UsuarioController : Delete ' + e);
            res.status(500).json({error: e})
        }

    };

    async update(req, res) {

    }
}

module.exports = new UsuarioController();
