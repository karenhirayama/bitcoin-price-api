import mongoose from 'mongoose';

const bitcoinSchema = mongoose.Schema({
    date: {
        type: Date,
    },
    coin: {
        type: Number
    }
})

const Bitcoin = mongoose.model('Bitcoin', bitcoinSchema);

export default Bitcoin;