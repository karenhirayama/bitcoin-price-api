import { Response, Request } from 'express';
import mongoose from 'mongoose';
import Bitcoin from '../models/bitcoin';

export const getHistoricalPrice = async (request: Request, response: Response) => {
    console.log(request.file?.buffer.toString("utf-8"));
    return response.send();
};

export const getProfit = async (request: Request, response: Response) => {
    const { initial_date, final_date, investiment_value } = request.query;
    try {
        console.log('Sucess in getProfit');
        const profit = 0;
        response.status(200).json(profit);
    } catch (error) {
        response.status(404).json({ message: error.message });
        console.log('Error in getProfit');
    };
};