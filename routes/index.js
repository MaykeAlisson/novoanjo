const express = require('express');
const router = express.Router();


module.exports = function (app) {

  app.get('/', function (req, res) {
    app.controllers.index.index(app, req, res);
  });

};
