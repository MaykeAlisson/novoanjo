//  Importando server.js
var app = require('./config/server');

// Config servidor
app.listen(3000, function () {
    console.log('Servidor On...');
});