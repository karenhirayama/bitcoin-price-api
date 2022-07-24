import { Router } from 'express';
import { getHistoricalPrice, getProfit } from '../controllers/bitcoin';

const router = Router();

router.post('/', getHistoricalPrice)
router.get('/rentability', getProfit);

export default router;