const Evento = require('../models/Evento');
const { validationResult } = require('express-validator');
const logger = require('../util/loggers');
const isNotEmpty = require("../util/isNotEmpty");


class EventoControllers {

    async create(req, res) {


    };

    async findById(req, res) {

        try {
            const errors = validationResult(req);

            if (isNotEmpty(errors.errors)) {
                return res.status(400).json({ errors: errors.array({ onlyFirstError: true }) });
            }

            return res.status(200).json({ response: "deu certo"})

        } catch (e) {
            logger.info('EventoControllers : findById ' + error);
            res.status(500).json({error: error})
        }

    };

    async findByAll(req, res) {

    };

    async findByEstado(req, res) {

    };

    async findByCidade(req, res) {

    }

    async update(req, res) {

    };

    async delete(req, res) {

    };
}

module.exports = new EventoControllers();
