// dependencias
const express = require('express');
const bodyParser = require('body-parser');
// 
var app = express();
// rutas
var user_routes = require('./routes/user');
var category_routes = require('./routes/category');
// formato 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// cabeceras 
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-API-KEY, X-Requested-With, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    next();
});
// rutas base 
app.use('/api', user_routes);
app.use('/api', category_routes);
// exportamos toda la configuración
module.exports = app;