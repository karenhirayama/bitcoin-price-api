import express from 'express';
import { getHistoricalPrice, getProfit } from '../controllers/bitcoin';

const router = express.Router();

router.get('/bitcoin', getHistoricalPrice);
router.get('/rentability', getProfit);

export default router;