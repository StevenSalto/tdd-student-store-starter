const express = require('express');
const router = express.Router();
const Store = require('../models/Store');

router.get('/', async (req, res, next) => {
    res.status(200).json(Store.products()); //SHOULD IMPLEMENT A TRY/CATCH FOR ERROR HANDLING, however this is local...
})


router.get('/:productId', async (req, res, next) => {
    res.status(200).json(Store.product(req.params.productId));
})

router.post('/', async (req, res, next) => {
    const newPost = req.body.post;
    console.log(newPost);
})

module.exports = router;