const mongoose = require('mongoose');
const needle = require("needle");

require('dotenv').config();

mongoose
    .connect(process.env.CONNECTION_URL, {
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err))