// Importado modulos
var express = require('express');
var consign = require('consign'); // Auto load

// Iniciando express na var app
var app = express();

// Definindo View engine
app.set('view engine', 'ejs');
// Definindo local de views
app.set('views', './app/views');

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