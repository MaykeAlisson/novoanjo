const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require("morgan");
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger_output.json')

const app = express();

const isProduction = process.env.NODE_ENV === "production";

app.use(cors());
if(!isProduction) app.use(morgan("dev"));
app.use(helmet());
app.disable('x-powered-by');

app.use(bodyParser.urlencoded({extended: true, limit: 1.5*1024*1024}));
app.use(bodyParser.json({limit: 1.5*1024*1024}));

// Routes
const rotaUsuario = require('./routes/usuario');
const rotaInstituicao = require('./routes/instituicao');
const rotaEvento = require('./routes/evento');

app.use('/api/usuario', rotaUsuario);
app.use('/api/instituicao', rotaInstituicao);
app.use('/api/evento', rotaEvento);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

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

module.exports = app;
