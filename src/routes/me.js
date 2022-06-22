const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/list/courses',meController.showAll);
router.get('/list/deleted',meController.showDeleted);

module.exports = router;
