//  Importando server.js
var app = require('./config/server');
var port = 4000

// Config servidor
app.listen(port, function () {
    console.log(`Servidor online na porta: ${ port }`);
});
