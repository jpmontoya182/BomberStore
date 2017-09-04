// dependencias
const mysql = require('mysql')
// creamos la conexion 
const con = mysql.createConnection({ host : 'localhost', user  : 'root', password: 'toor', database: 'bomberstore'});
// nos conectamos a la bd
con.connect(function(err){
    if(err){
        console.log(err);
    }else{
        return true;
    }
})
// exportamos 
module.exports = con;