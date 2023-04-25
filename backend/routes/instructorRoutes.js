import express from 'express';
import { signUp, updateInstructor, getInstructor, deleteInstructor, getAllInstructors} from '../controllers/instructorController.js';

const router = express.Router();

router.post('/signup', signUp);
router.post('/updateInstructor', updateInstructor);
router.get('/getAllInstructors', getAllInstructors);
router.get('/:instructorId', getInstructor);
router.delete('/:instructorId', deleteInstructor);

export default router;