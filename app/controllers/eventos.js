module.exports = {
  eventos(app, req, res) {
    // render da pagina
    res.render('eventos');
  },
  novoEvento(app, req, res) {
    // render da pagina
    res.render('novo-evento');
  },
  novoEventoRegister(app, req, res) {
    console.log(req.body);
    res.redirect('/eventos');
  }
};
