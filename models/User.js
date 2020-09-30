const knex = require('../database/connection');

class User {

  async save(user) {
    let result = await knex('usuario').insert({...user});
    return result;
  };

  async findEmail(email) {
    let result = await knex('usuario').select('email').where({email: email});
    return result.length > 0;
  };

  async login(email) {
    return knex('usuario').select('id', 'nome', 'email', 'senha').where({email: email});
  }
}

module.exports = new User();
