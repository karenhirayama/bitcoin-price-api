import express from 'express';
import mongoose from 'mongoose';
import Bitcoin from '../models/bitcoin';

export const getHistoricalPrice = async (req, res) => {
    try {
        const historicalPrice = await Bitcoin.find();
        res.status(200).json(historicalPrice);
    } catch (error) {
        res.status(404).json({ message: error.message });
    };
};

export const getProfit = async (req, res) => {
    const {initial_date, final_date, investiment_value} = req.query;
    try {
        const profit = 0;
        res.status(200).json(profit);
    } catch (error) {
        res.status(404).json({ message: error.message });
    };
};