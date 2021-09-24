const User = require('../models/Usuario');
require("dotenv-safe").config({
    allowEmptyValues: true
});
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const logger = require('../util/loggers');
const Jwt = require('../util/Jwt');
const isNotEmpty = require("../util/isNotEmpty");


class UsuarioController {

    async login(req, res) {

        try {
            const errors = validationResult(req);

            if (isNotEmpty(errors.errors)) {
                return res.status(400).json({ errors: errors.array() });
            }

            return res.status(200).json({ response: "deu certo"})

        } catch (e) {
            logger.info('UsuarioController : Login ' + error);
            res.status(500).json({error: error})
        }

    };

    async create(req, res) {

        try {
            const errors = validationResult(req);

            if (isNotEmpty(errors.errors)) {
                return res.status(400).json({ errors: errors.array() });
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
            logger.info('UsuarioController : Login ' + error);
            res.status(500).json({error: error})
        }

    };

    async delete(req, res) {

    };

    async update(req, res) {

    }
}

module.exports = new UsuarioController();
