const express = require('express');
const router = express.Router();
const Store = require('../models/Store');
const AddItem = require("../models/AddItem");


router.get('/', async (req, res, next) => {
    res.status(200).json(Store.products()); //SHOULD IMPLEMENT A TRY/CATCH FOR ERROR HANDLING, however this is local...
})


router.get('/:productId', async (req, res, next) => {
    res.status(200).json(Store.product(req.params.productId));
})

router.post('/', async (req, res, next) => {
    if(!(req.body.hasOwnProperty("shoppingCart") && req.body.hasOwnProperty("user"))) {
        res.status(400).send("Error 400");
    } 
    else if(AddItem.hasDuplicates(req.body.shoppingCart)){res.status(400).send("Error 400 hass duplicates");} 
    else if(AddItem.hasMissingFields(req.body.shoppingCart)){res.status(400).send("Error 400 missing property")} 
    else {
        res.status(201).send(AddItem.addItem(req.body.shoppingCart, req.body.user));
    }
})

module.exports = router;