const express = require('express');
const app = express();
const pool = require('./queries.js')
const PORT = 3000;

const things = require('./things');

app.use(express.json());

app.use('/things', things);


pool.connect((err, res) => {
    console.log(err);
    console.log(res);
})


app.listen(PORT, () => {
    console.log(`Starting server from http://localhost:${PORT}/things`);
});