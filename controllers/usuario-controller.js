// const logger = require('../config/util/logger');
// const bcrypt = require('bcryptjs');
//
// module.exports = {
//
//   // GET /
//   index(app, req, res){
//
//     req.assert('nome', 'Nome obrigatorio').notEmpty();
//     req.assert('sexo', 'Sexo obrigatorio').notEmpty();
//     req.assert('nascimento', 'Nascimento obrigatorio').notEmpty();
//     req.assert('email', 'Email obrigatorio').notEmpty().isEmail();
//     req.assert('senha', 'Senha obrigatorio').notEmpty();
//
//     const erros = req.validationErrors();
//
//     if (erros) {
//       console.log('Erros de validacao encontados cadastro usuario');
//       res.status(400).send(erros);
//       return;
//     }
//   }
// }
//
//
