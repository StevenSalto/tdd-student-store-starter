const express = require("express")
const {storage} = require("../data/storage")
const customData = require('../data/db.json')

class AddItem {
    static addItem(shoppingCart, user) {
        var totalCost = 0;
        shoppingCart.forEach((obj) => {
   
            totalCost += customData.products[obj.itemId-1].price*obj.quantity;
        })
        totalCost = totalCost*1.0875;
        var currentdate = new Date(); 
        var datetime = "Last Sync: " + currentdate.getDate() + "/"
                        + (currentdate.getMonth()+1)  + "/" 
                        + currentdate.getFullYear() + " @ "  
                        + currentdate.getHours() + ":"  
                        + currentdate.getMinutes() + ":" 
                        + currentdate.getSeconds();

        let purchase={"id": customData.purchases.length + 1, 'name':user.name, 'email':user.email, 'order': shoppingCart, "total":totalCost, 'createdAt': datetime};
        storage.get("purchases").push({"cock":"csdc"}).write();
        console.log("response updated purchases: ",customData.purchases.length);
        return JSON.stringify(purchase);
    }
    static hasDuplicates(shoppingCart) {
        let retvar = false;
        shoppingCart.forEach((obj, ind) => {
            shoppingCart.forEach((obj2, ind2) => {
                if(obj.itemId == obj2.itemId && ind != ind2){
                    retvar =  true;
                }
            })
        })

        return retvar;
    }
    static hasMissingFields(shoppingCart) {
        return !(shoppingCart.every((obj) => {
            return obj.hasOwnProperty("itemId") && obj.hasOwnProperty("quantity")
        }))

    }
}

module.exports = AddItem;