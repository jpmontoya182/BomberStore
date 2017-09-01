// dependencias
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
// 
var app = express();
// rutas
var user_routes = require('./routes/user');
// formato 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// cabeceras 
app.use(cors());
// rutas base 
app.use('/api', user_routes);
// exportamos toda la configuración
module.exports = app;