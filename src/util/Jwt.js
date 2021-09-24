const jwt = require('jsonwebtoken');
require("dotenv-safe").config({
    allowEmptyValues: true
});

class Jwt {

    create(payload) {
        return jwt.sign({payload}, process.env.SECRET, {
            expiresIn: '8h'
        });
    };

}

module.exports = new Jwt();
