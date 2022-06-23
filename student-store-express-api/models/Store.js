const express = require("express")
const customData = require('../data/db.json')

class Store {
    static products() {
        return customData;
    }
}

module.exports = Store;