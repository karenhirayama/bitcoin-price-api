import { Router, Request, Response } from 'express';
import { getHistoricalPrice, getProfit } from '../controllers/bitcoin';
import multer from 'multer';

const router = Router();

const multerConfig = multer();

router.post('/', multerConfig.single('file'), getHistoricalPrice)
router.get('/rentability', getProfit);

export default router;