const express = require("express");
const morgan = require("morgan");
const Store = require('./routes/Store')

const app=express();

app.get('/store', Store);
app.get('/store/:productId', Store);

app.get('/', (req, res, next) => {
    res.status(200).json({"ping":"pong"});
});

module.exports = app;