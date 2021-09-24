const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/routes/usuario.js', './src/routes/instituicao.js', './src/routes/evento.js'];

swaggerAutogen(outputFile, endpointsFiles).then(() => {
    require('./app.js')
});
