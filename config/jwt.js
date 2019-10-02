module.exports = {

  verifyJWT(req, res, next){
    const jwt = require('jsonwebtoken');
    const token = req.headers.authorization.substring(7);

    if (!token)
      return res.status(401).send({ auth: false, message: 'Acesso Negado.' });

    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Token Invalido.' });

      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.usuario.id;
      req.userNome = decoded.usuario.nome;
      req.userPerfil = decoded.usuario.id_perfil;

      next();
    });
  }

};
