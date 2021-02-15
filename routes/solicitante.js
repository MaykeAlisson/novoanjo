const router = require('express').Router();
const {body} = require('express-validator');

const UsuarioController = require('../controllers/UsuarioController');

router.post('/v1/create', [
  body('name', 'Name requ').notEmpty().isEmail(),
  body('senha', 'Senha obrigatorio, minimo 6 caracteres').notEmpty().isString().isLength({min: 6}),
], UsuarioController.login);
router.post('/v1/cadastro',
  [
    body('nome', 'Nome obrigatorio').notEmpty().isString(),
    body('email', 'Email obrigatorio').notEmpty().isEmail(),
    body('senha', 'Senha obrigatorio, minimo 6 caracteres').notEmpty().isString().isLength({min: 6})
  ], UsuarioController.create);

module.exports = router;
