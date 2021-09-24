const knex = require('../database/connection');

class Usuario {

    async save(usuario) {
        return knex('usuario').insert({...usuario});
    };

    async findById(id){};

    async findEmail(email) {
        let result = await knex('usuario').select('email').where({email: email});
        return result.length > 0;
    };

    async update(id, usuario){};

    async deleteById(id){};

}

module.exports = new Usuario();
