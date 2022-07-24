import mongoose from 'mongoose';

const bitcoinSchema = new mongoose.Schema({
    date: String,
    price: Number,
})

const Bitcoin = mongoose.model('Bitcoin', bitcoinSchema);

export default Bitcoin;