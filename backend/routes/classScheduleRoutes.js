import express from 'express';
import { createSchedule, updateSchedule, deleteSchedule } from '../controllers/classScheduleController.js';

const router = express.Router();

// Class schedules
router.post('/create', createSchedule);
router.post('/update', updateSchedule);
router.delete('/:scheduleId', deleteSchedule);

export default router;