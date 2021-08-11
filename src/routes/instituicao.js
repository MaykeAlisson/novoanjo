const router = require('express').Router();
const {body} = require('express-validator');

const InstituicaoController = require('../controllers/InstituicaoControllers');

router.post('/v1/create', [
    body('email', 'Email obrigatorio').notEmpty().isEmail(),
    body('senha', 'Senha obrigatorio, minimo 6 caracteres').notEmpty().isString().isLength({min: 6}),
], InstituicaoController.create);

router.get('/v1/instituicao/:id', InstituicaoController.findById);

router.get('/v1/instituicao', InstituicaoController.findByAll);

router.get('/v1/instituicao/estado/:estado', InstituicaoController.findByEstado);

router.get('/v1/instituicao/cidade/:cidade', InstituicaoController.findByCidade);

router.put('/v1/update/:id', InstituicaoController.update);

// router.delete('/v1/lancamento/:id', Auth, UsuarioController.delete);

router.delete('/v1/delete/:id', InstituicaoController.delete);


module.exports = router;
