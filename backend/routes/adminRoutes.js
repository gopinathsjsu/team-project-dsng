import express from 'express';
import { signUp, updateAdmin, getAdmin, deleteAdmin, getAllAdmins} from '../controllers/adminController.js';
import { createSchedule, updateSchedule, deleteSchedule } from '../controllers/classScheduleController.js';

const router = express.Router();

router.post('/signup', signUp);
router.post('/updateAdmin', updateAdmin);
router.get('/getAllAdmins', getAllAdmins);
router.get('/:adminId', getAdmin);
router.delete('/:adminId', deleteAdmin);

// Class schedules
router.post('/classSchedule/create', createSchedule);
router.post('/classSchedule/update', updateSchedule);
router.delete('/classSchedule/:scheduleId', deleteSchedule);

export default router;