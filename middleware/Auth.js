module.exports = function(req, res, next){

  // verifyJWT(req, res, next){
    const jwt = require('jsonwebtoken');

    if (!req.headers.authorization)
      return res.status(401).send({ auth: false, message: 'Necessario informar Token.' });

    const token = req.headers.authorization.substring(7);

    if (!token)
      return res.status(401).send({ auth: false, message: 'Acesso Negado.' });

    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) return res.status(401).send({ auth: false, message: 'Token Invalido.' });

      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.usuario.id;
      req.userNome = decoded.usuario.nome;
      // req.userPro = decoded.usuario.pro;

      next();
    });
  // }

};
