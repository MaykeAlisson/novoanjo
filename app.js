//  Importando server.js
const app = require('./infra/server');
const port = 3000;

// Config servidor
app.listen(port, function () {
  console.log('Server on port %s', port);
});
