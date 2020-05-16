// Importado modulos
const express = require('express');
const consign = require('consign'); // Auto load
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

// Iniciando express na var app
const app = express();

// Cors
app.use(cors());

// Helmet
app.use(helmet());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static('./app/public'));

app.set('views', './app/view');
app.set('view engine', 'ejs');

// Definindo arquivos staticos
app.use(express.static('./app/public'));

// Definindo auto-load do Consign (inject no app)
consign()
  .include('./app/routes')
  .then('./app/controllers')
  .into(app);

// Exportando var app
module.exports = app;
