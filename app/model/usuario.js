module.exports = {

  cadastro(usuario){
    console.log(usuario);

    return 10;
  },

  atualiza(usuario){
    console.log(usuario);
  },

  perfil(idUsuario){
    const dados = {
      dados: "dados do usuario"
    };

    return dados;
  },

  login(req){
    const dadosUsuario = {
      id: 1,
      nome: 'Mayke Alisson',
      id_perfil: 3
    };

    return dadosUsuario;
  }

};
