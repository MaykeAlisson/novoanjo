// Importado modulos
const express = require('express');
const consign = require('consign'); // Auto load
const bodyParser = require('body-parser');

// Iniciando express na var app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Definindo arquivos staticos
app.use(express.static('./app/public'));

// Definindo auto-load do Consign (inject no app)
consign()
  .include('./app/routes')
  .then('./config/connectionFactory.js')
  .then('./app/model')
  .then('./app/controllers')
  .into(app);

// Exportando var app
module.exports = app;
