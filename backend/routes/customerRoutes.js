import express from 'express';
// import { signUp, signIn, checkTokenValidation, updateUser, getUser} from '../controllers/customerController.js';
import { signIn } from '../controllers/customerController.js';

const router = express.Router();

// router.post('/signup', signUp);
router.post('/signin', signIn);
// router.post('/updateUser', updateUser);
// router.get('/verifyToken/:token', checkTokenValidation);
// router.get('/:userId', getUser);

export default router;