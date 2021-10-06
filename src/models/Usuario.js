const knex = require('../database/connection');

class Usuario {

    async save(usuario) {
        let result = await knex('usuario').insert({...usuario});
        return result;
    };

    async login(email) {
        return knex('usuario').select('id_usuario', 'nome', 'email', 'senha', 'perfil').where({email: email});
    }

    async findById(id){};

    async findEmail(email) {
        let result = await knex('usuario').select('email').where({email: email});
        return result.length > 0;
    };

    async update(id, usuario){

    };

    async deleteById(id){
        return knex('usuario').delete().where({id_usuario: id})
    };

}

module.exports = new Usuario();
