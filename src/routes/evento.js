const router = require('express').Router();
const {body} = require('express-validator');
const Auth = require('../middleware/Auth');

const EventoController = require('../controllers/EventoControllers');

router.post('/v1/create', [
    body('email', 'Email obrigatorio').notEmpty().isEmail(),
    body('senha', 'Senha obrigatorio, minimo 6 caracteres').notEmpty().isString().isLength({min: 6}),
], Auth, EventoController.create);

router.get('/v1/evento/:id', EventoController.findById);

router.get('/v1/evento', EventoController.findByAll);

router.get('/v1/evento/estado/:estado', EventoController.findByEstado);

router.get('/v1/evento/cidade/:cidade', EventoController.findByCidade);

router.put('/v1/update/:id', Auth, EventoController.update);

router.delete('/v1/delete/:id', Auth, EventoController.delete);

module.exports = router;
