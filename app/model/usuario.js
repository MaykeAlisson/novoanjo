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
  }

};
