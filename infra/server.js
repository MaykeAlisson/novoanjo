// Importado modulos
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require("morgan");

// Iniciando express na var app
const app = express();

const isProduction = process.env.NODE_ENV === "production";

app.use(cors());
if(!isProduction) app.use(morgan("dev"));
app.use(helmet());
app.disable('x-powered-by');

app.use(bodyParser.urlencoded({extended: false, limit: 1.5*1024*1024}));
app.use(bodyParser.json({limit: 1.5*1024*1024}));

// Routes
const rotaUsuario = require('../routes/usuario');

app.use('/api/usuario', rotaUsuario);


// 404
app.use((req,res,next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// // Tratamento de Erro
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  if (err.status !== 404) console.warn("Error: ", err.message, new Date());
  res.json({errors: {message: err.message, status: err.status}});
});


// Exportando var app
module.exports = app;
