//  Importando server.js
const app = require('./config/server');
const port = 4000;

// Config servidor
app.listen(port, function () {
    console.log(`Servidor online na porta: ${ port }`);
});
