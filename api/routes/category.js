var express = require('express');
var categoryController = require('../controllers/category');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.get('/categories/:page?', md_auth.ensureAuth, categoryController.getAllCategories);   

module.exports = api;