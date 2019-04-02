var mockUsuarios = [
  {
    id: '1',
    nome: 'Leonardo',
    sobrenome: 'Xavier',
    email: 'gxavier.leonardo@gmail.com',
    telefone: '2422453789',
    organizacao: null,
    anjo: true,
    beneficiario: false,
    depoimento: null
  }
];

module.exports = {
  usuario(app, req, res, idUsuario) {
    var usuario = mockUsuarios.filter(function({ id }) {
      return id === idUsuario;
    })[0];

    // render da pagina
    res.render('usuario', { usuario });
  }
};
