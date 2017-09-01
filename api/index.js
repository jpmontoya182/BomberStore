// configuracion del server
var app = require('./app');
// conexion a la BD
var con = require('./cnx');
// validamos el puerto de la app, en caso de que no lo sepa se asigna
var port = process.env.port || 3500;
// 
if(con){
    console.log('we are connect with the DB ... ');
    app.listen(port, function(){
        console.log('Adrress of the API : http://localhost:' + port);
    }) 
}