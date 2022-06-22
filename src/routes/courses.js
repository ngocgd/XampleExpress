const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/create',courseController.create);
router.get('/:slug', courseController.show);
router.post('/create',courseController.store);
router.get('/:id/edit',courseController.edit);
router.post('/:id',courseController.update);
router.post('/softDelete/:id',courseController.softDelete);
router.post('/:id/restore',courseController.restore);
router.post('/forceDelete/:id',courseController.forceDelete);

module.exports = router;
