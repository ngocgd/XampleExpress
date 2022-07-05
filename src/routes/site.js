const express = require('express');
const router = express.Router();
const {verifyAccessToken,checkUser} = require('../jwt_services')
const siteController= require('../app/controllers/SiteController');

router.get('/search',siteController.search);
router.get('/:page',verifyAccessToken,checkUser,siteController.home);

module.exports = router;