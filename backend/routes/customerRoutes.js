import express from 'express';
import { signUp, updateCustomer, getCustomer, deleteCustomer, getAllCustomers} from '../controllers/customerController.js';

const router = express.Router();

router.post('/signup', signUp);
router.post('/updateCustomer', updateCustomer);
router.get('/getAllCustomers', getAllCustomers);
router.get('/:customerId', getCustomer);
router.delete('/:customerId', deleteCustomer);

export default router;