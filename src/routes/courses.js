const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/create',courseController.create);
router.get('/:slug', courseController.show);
router.post('/create',courseController.store);
router.get('/:id/edit',courseController.edit);
router.post('/:id',courseController.update);
module.exports = router;
