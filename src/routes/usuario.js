const router = require('express').Router();
const {body} = require('express-validator');

const UsuarioController = require('../controllers/UsuarioController');


router.post('/v1/login', [
    body('email', 'Email obrigatorio').notEmpty().isEmail(),
    body('senha', 'Senha obrigatorio, minimo 6 caracteres').notEmpty().isString().isLength({min: 6}),
], UsuarioController.login);

router.post('/v1/cadastro',
    [
        body('nome', 'Nome obrigatorio').notEmpty().isString(),
        body('sexo', 'Sexo obrigatorio [M, F]').notEmpty().isString(),
        body('nascimento', 'Nascimento obrigatorio [yyyy-MM-dd]').notEmpty().isDate(),
        body('email', 'Email obrigatorio').notEmpty().isEmail(),
        body('senha', 'Senha obrigatorio, minimo 6 caracteres').notEmpty().isString().isLength({min: 6})
    ], UsuarioController.create);

// router.delete('/v1/lancamento/:id', Auth, UsuarioController.delete);

router.delete('/v1/delete/:id', UsuarioController.delete);

router.put('/v1/update/:id',
    [
        body('nome', 'Nome obrigatorio').isString(),
        body('email', 'Email obrigatorio').isEmail(),
        body('senha', 'Senha obrigatorio, minimo 6 caracteres').isString().isLength({min: 6})
    ], UsuarioController.update);

module.exports = router;
