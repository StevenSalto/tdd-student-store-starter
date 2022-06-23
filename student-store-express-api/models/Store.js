const express = require("express")
const customData = require('../data/db.json')

class Store {
    static products() {
        return {"products": customData.products};
    }
    static product(productId) {
        return customData.products[productId-1];
    }
}

module.exports = Store;