import { Response, Request } from 'express';
import { Readable } from 'stream';
import readline from 'readline';
import mongoose from 'mongoose';
import Bitcoin from '../models/bitcoin';

interface BitcoinPrice {
    date: string;
    price: number;
}

export const getHistoricalPrice = async (request: Request, response: Response) => {
    const { file } = request;
    const { buffer } = file as any;

    const readableFile = new Readable();
    readableFile.push(buffer);
    readableFile.push(null);

    const priceLine = readline.createInterface({
        input: readableFile
    });

    const prices: BitcoinPrice[] = [];

    for await (let line of priceLine) {
        const priceLineSplit = line.split(",");

        prices.push({
            date: priceLineSplit[0],
            price: Number(priceLineSplit[1])
        });
    };

    for await (let price of prices) {
        const newPriceLine = new Bitcoin(price);

        try {
            await newPriceLine.save();
        } catch (error) {
            response.status(404).json({ message: error.message });
            console.log('Error in getProfit');
        };
    };

    return response.json(prices)
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