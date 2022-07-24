import mongoose from 'mongoose';

const bitcoinSchema = new mongoose.Schema({
    date: String,
    coin: String,
})

const Bitcoin = mongoose.model('Bitcoin', bitcoinSchema);

export default Bitcoin;