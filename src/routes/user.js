const express = require('express')
const routes = express.Router();
const accountController = require('../app/controllers/AccountController');

// routes.get('/register',accountController.register);
routes.get('/showAll',accountController.showAllAccount);
routes.get('/login',accountController.login);
routes.get('/register',accountController.register);
routes.post('/register',accountController.create);
routes.post('/account/delete/:id',accountController.delete);
module.exports = routes;

