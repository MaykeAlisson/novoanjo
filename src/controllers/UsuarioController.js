const User = require('../models/Usuario');
require("dotenv-safe").config({
    allowEmptyValues: true
});
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const logger = require('../util/loggers');
const jwt = require('jsonwebtoken');
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

        // todo usuario e anjo no incio

    };

    async delete(req, res) {

    };

    async update(req, res) {

    }
}

module.exports = new UsuarioController();
