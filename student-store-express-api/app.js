const express = require("express");
const morgan = require("morgan");
const router = require('./routes/Store')
const cors = require('cors');

const app=express();
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  
app.use('/store', router);
app.use('/store/:productId', router);

app.use('/', (req, res, next) => {
    res.status(200).json({"ping":"pong"});
});

module.exports = app;