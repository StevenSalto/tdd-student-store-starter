const express = require('express');
const router = express.Router();
const Store = require('../models/Store');

router.get('/store', async (req, res, next) => {
    res.status(200).json(Store.products()); //SHOULD IMPLEMENT A TRY/CATCH FOR ERROR HANDLING, however this is local...
})

module.exports = router;