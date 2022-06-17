const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.use('/',newsController.index);
router.use('/:slug',newsController.show)
module.exports = router;