var express = require('express');
var userController = require('../controllers/user');
var api = express.Router();

api.post('/login', userController.loginUser);   
api.get('/', (req, res)=>{
    return res.status(404).send({message : 'Error'})
})
module.exports = api;