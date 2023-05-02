import express from 'express';
import { createEnrollment, getClassEnrollment, deleteEnrollment } from '../controllers/classEnrollmentController.js';

const router = express.Router();

// Class enrollments
router.post('/create', createEnrollment);
router.delete('/:enrollmentId', deleteEnrollment);
router.get('/withSchedules', getClassEnrollment)

export default router;