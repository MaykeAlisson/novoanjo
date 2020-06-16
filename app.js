//  Importando server.js
const app = require('./config/server');
const port = process.env.PORT || 3000;

// Config servidor
app.listen(port, function () {
  console.log(`Rodando na //localhost:${port}`);
});
// Start
// app.listen(port, (err) => {
//   if (err) throw err;
//   console.log(`Rodando na //localhost:${port}`);
// })
