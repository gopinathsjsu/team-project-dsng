import express from 'express';
import { signUp, updateAdmin, getAdmin, deleteAdmin, getAllAdmins} from '../controllers/adminController.js';

const router = express.Router();

// router.post('/signin', signIn);
// router.get('/verifyToken', checkTokenValidation);

router.post('/signup', signUp);
router.post('/updateAdmin', updateAdmin);
router.get('/getAllAdmins', getAllAdmins);
router.get('/:adminId', getAdmin);
router.delete('/:adminId', deleteAdmin);

export default router;