const express = require("express");
const morgan = require("morgan");
const Store = require('./routes/Store')
const cors = require('cors');

const app=express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.get('/store', Store);
app.get('/store/:productId', Store);

app.get('/', (req, res, next) => {
    res.status(200).json({"ping":"pong"});
});

module.exports = app;