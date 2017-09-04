var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'RasBerryPi3162';

exports.createToken = function(user){
    var payload = {
        sub : user.username,
        name : user.name, 
        email : user.email, 
        role : user.role,
        iat : moment().unix(), 
        exp : moment().add(30, 'days').unix()
    }
    return jwt.encode(payload, secret);
}