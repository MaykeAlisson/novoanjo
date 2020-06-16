const compression = require("compression");
const express = require("express");
const consign = require('consign'); // Auto load
const ejs = require("ejs");
const expressValidator = require('express-validator');
const helmet = require('helmet');
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Configurando ambiente
const isProduction = process.env.NODE_ENV === "production";

// Definindo arquivos staticos
app.use("/public", express.static(__dirname + "/public"));
app.use("/public/image", express.static(__dirname + "/public/image"));

// Config View
app.set("view engine", "ejs");

if(!isProduction) app.use(morgan("dev"));
app.use(cors());
app.disable('x-powered-by');
app.use(compression());

// Helmet
app.use(helmet());

// validando campos
app.use(expressValidator());

app.use(bodyParser.urlencoded({extended: false, limit: 1.5*1024*1024}));
app.use(bodyParser.json({limit: 1.5*1024*1024}));

// Routes
const rotaHome = require('../routes/index');
const rotaUsuario = require('../routes/usuario');

app.use('/index', rotaHome);
app.use('/usuario', rotaUsuario);

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

// Definindo auto-load do Consign (inject no app)
consign()
  .include('./repository')
  .into(app);

// Exportando var app
module.exports = app;
