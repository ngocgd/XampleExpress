const express = require('express');
const router = express.Router();
const {verifyAccessToken,checkAdmin} = require('../jwt_services')

const courseController = require('../app/controllers/CourseController');

router.get('/create',verifyAccessToken,checkAdmin,courseController.create);
router.get('/:slug',verifyAccessToken,checkAdmin,courseController.show);
router.post('/create',courseController.store);
router.get('/:id/edit',verifyAccessToken,checkAdmin,courseController.edit);
router.post('/:id',courseController.update);
router.post('/softDelete/:id',courseController.softDelete);
router.post('/:id/restore',courseController.restore);
router.post('/forceDelete/:id',courseController.forceDelete);

module.exports = router;
