// const app = require('./infra/server');

exports.index = (req, res, next) => {

  // req.assert('nome', 'Nome obrigatorio').notEmpty();
  //
  // const erros = req.validationErrors();
  //
  // if (erros) {
  //   console.log('Erros de validacao encontados cadastro usuario');
  //   res.status(400).send(erros);
  //   return;
  // }

  res.status(200).send("ok");
  // console.log(app);

}
