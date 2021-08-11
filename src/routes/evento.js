const router = require('express').Router();
const {body} = require('express-validator');

const EventoController = require('../controllers/EventoControllers');

router.post('/v1/create', [
    body('email', 'Email obrigatorio').notEmpty().isEmail(),
    body('senha', 'Senha obrigatorio, minimo 6 caracteres').notEmpty().isString().isLength({min: 6}),
], EventoController.create);

router.get('/v1/evento/:id', EventoController.findById);

router.get('/v1/evento', EventoController.findByAll);

router.get('/v1/evento/estado/:estado', EventoController.findByEstado);

router.get('/v1/evento/cidade/:cidade', EventoController.findByCidade);


router.put('/v1/update/:id', EventoController.update);

// router.delete('/v1/lancamento/:id', Auth, UsuarioController.delete);

router.delete('/v1/delete/:id', EventoController.delete);


module.exports = router;
