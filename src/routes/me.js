const express = require('express');
const router = express.Router();
const {verifyAccessToken,checkAdmin} = require('../jwt_services')

const meController = require('../app/controllers/MeController');

router.get('/list/courses',verifyAccessToken,checkAdmin,meController.showAll);
router.get('/list/deleted',verifyAccessToken,checkAdmin,meController.showDeleted);

module.exports = router;
