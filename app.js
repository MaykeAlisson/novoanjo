//  Importando server.js
const app = require('./config/server');
const port = 3000;

// Config servidor
app.listen(port, function () {
  console.log('Umbler listening on port %s', port);
});
