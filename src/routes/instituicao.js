const router = require('express').Router();
const {body} = require('express-validator');
const Auth = require('../middleware/Auth');

const InstituicaoController = require('../controllers/InstituicaoControllers');

router.post('/v1/create', [
    body('email', 'Email obrigatorio').notEmpty().isEmail(),
    body('senha', 'Senha obrigatorio, minimo 6 caracteres').notEmpty().isString().isLength({min: 6}),
], Auth, InstituicaoController.create);

router.get('/v1/instituicao/:id', InstituicaoController.findById);

router.get('/v1/instituicao', InstituicaoController.findByAll);

router.get('/v1/instituicao/estado/:estado', InstituicaoController.findByEstado);

router.get('/v1/instituicao/cidade/:cidade', InstituicaoController.findByCidade);

router.put('/v1/update/:id', Auth, InstituicaoController.update);

router.delete('/v1/delete/:id', Auth, InstituicaoController.delete);

module.exports = router;
