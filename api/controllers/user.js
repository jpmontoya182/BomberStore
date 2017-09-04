var bcrypt = require('bcrypt-nodejs');
var jwt = require('../services/jwt');
const con = require('../cnx');


function loginUser (req, res){ 
    var params = req.body;
    var username = params.username;
    var password = params.password;
   
    if(!username || username == null){
        return res.status(404).send({message : 'el usuario no es valido'});
    }

    con.query("select name, username, password from bomberstore.user where username = '" + username  + "' and state = 1", (err, data) =>{
        if (err) {
            // error en el server
            res.status(500).send({message : 'Error en la peticion'});
        } else {
            // validamos si la consulta encontro resultados
            if (!data || data == []) {
                res.status(404).send({message : 'El usuario no existe'})
            } else {           
            // comparamos la contraseña
                bcrypt.compare(password, data[0].password, (err, check) => {  
                    // contraseña valida                    
                    if(check){
                        // validamos si se tiene el hash en el cliente
                        if (params.gethash) {
                            // se devuelve el token
                            res.status(200).send({token : jwt.createToken(data[0])})
                        } else {
                            // no se tiene se devuelve la data
                            res.status(200).send(data[0]);   
                        }
                    }else{
                        res.status(404).send({message : 'Por favor valide los datos ingresados'});
                    }
                })
            }
        }
    }) 
}

module.exports = {
    loginUser
}