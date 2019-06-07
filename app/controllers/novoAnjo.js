module.exports.index = function(app, req, res){
  // Render do formulario de cadastro
  res.render('novo-anjo');
};

module.exports.cadastro = function(app, req, res){
  let anjo = req.body;
}
