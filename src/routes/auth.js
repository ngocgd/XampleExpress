const express = require('express')
const routes = express.Router();
const authentication = require('../app/controllers/AuthenticationController');
const {verifyAccessToken} = require('../jwt_services')


// routes.get('/register',accountController.register);
routes.post('/',authentication.authen);
module.exports = routes;

