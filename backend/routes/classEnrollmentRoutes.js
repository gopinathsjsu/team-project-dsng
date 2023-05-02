import express from 'express';
import { createEnrollment, updateEnrollment, deleteEnrollment } from '../controllers/classEnrollmentController.js';

const router = express.Router();

// Class schedules
router.post('/create', createEnrollment);
router.post('/update', updateEnrollment);
router.delete('/:scheduleId', deleteEnrollment);

export default router;