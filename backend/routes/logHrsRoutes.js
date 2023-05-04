import express from 'express';
import { logCheckin, logCheckout, logActivity} from '../controllers/logHrsController.js';

const router = express.Router();

router.post('/checkin', logCheckin);
// router.post('/checkout', logCheckout);
// router.post('/activity', logActivity);
// router.get('/:customerId', getCustomer);
// router.delete('/:customerId', deleteCustomer);

export default router;