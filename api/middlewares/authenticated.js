var jwt = require('jwt-simple');
var moment = require('moment');
// clave para generar el token
var secret = 'RasBerryPi3162';
// metodo para validar si esta autenticado
exports.ensureAuth = function(req, res, next){
    // valida si tiene la autorizacion
    if (req.body.authorization) {
        return res.status(403).send({message : 'La petición no tiene el header de autorización'});        
    } 
    // se obtiene el toke
    var token = req.headers.authorization.replace(/['"]+/g, '');
    
    try {
        // se decodifica el toke con la clave secreta
        var payload = jwt.decode(token, secret);
        // se valida si en fechas es valido el token
        if(payload.exp <= moment().unix()){
            return res.status(401).message({message : 'el token a expirado'})
        }        
    } catch (ex) {
        // en caso que se genere el error 
        return res.status(404).send({message : 'Token no valido'})
    }    
    req.user = payload;

    next;
}