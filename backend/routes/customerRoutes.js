import express from 'express';
import { signUp, signIn, checkTokenValidation, updateCustomer, getCustomer, deleteCustomer, getAllCustomers} from '../controllers/customerController.js';

const router = express.Router();

router.post('/signup', signUp);
router.post('/signin', signIn);
router.post('/updateUser', updateCustomer);
router.get('/verifyToken', checkTokenValidation);
router.get('/getAllCustomers', getAllCustomers);
router.get('/:customerId', getCustomer);
router.delete('/:customerId', deleteCustomer);

export default router;