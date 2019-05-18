// Importado modulos
var express = require('express');
var consign = require('consign'); // Auto load
var bodyParser = require('body-parser');

// Iniciando express na var app
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Definindo arquivos staticos
app.use(express.static('./app/public'));

// Definindo auto-load do Consign
consign()
  .include('./app/routes')
  .then('./config/connectionFactory.js')
  .then('./app/models')
  .then('./app/controllers')
  .into(app);

// Exportando var app
module.exports = app;
