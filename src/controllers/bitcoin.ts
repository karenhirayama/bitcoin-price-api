import express from 'express';
import mongoose from 'mongoose';
import Bitcoin from '../models/bitcoin';

export const getHistoricalPrice = async (req, res) => {
    try {
        const historicalPrice = await Bitcoin.find();
        res.status(200).json(historicalPrice);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}