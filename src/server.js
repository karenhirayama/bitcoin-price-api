const mongoose = require('mongoose');
const needle = require("needle");
const csvParser = require("csv-parser");

require('dotenv').config();

const arrayToInsert = [];

const url = "https://raw.githubusercontent.com/coinmetrics/data/master/csv/btc.csv";

needle
    .get(url)
    .pipe(csvParser())
    .on("data", (data) => {
        const { time, PriceUSD } = data
        arrayToInsert.push({ date: time, price_usd: PriceUSD });
    })
    .on("done", (err) => {
        if (err) console.log("An error has occurred");
        else {
            mongoose
                .connect(process.env.CONNECTION_URL, {
                    useUnifiedTopology: true,
                })
                .then((err, client) => {
                    dbConn = client.db();
                    console.log('MongoDB connected');
                    const collectionName = "bitcoin_historical_price";
                    const collection = dbConn.collection(collectionName);
                    collection.insertMany(arrayToInsert, (err, result) => {
                        if (err) console.log(err);
                        if (result) console.log("Import CSV into database successfully.")
                    });
                })
                .catch((err) => {
                    console.log(err)
                });
        };
    });
