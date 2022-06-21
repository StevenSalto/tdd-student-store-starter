import * as React from "react"
import "./ShoppingCart.css"

//props: isOpen, products, shoppingCart: itemId, quantity,
export default function ShoppingCart({isOpen, products, shoppingCart}) {
    console.log(shoppingCart)
    function CartTable(obj) {
        console.log(obj, products[obj.itemId])
        let product = products[obj.itemId - 1];
        return (
            <div className="product">
                <div className="cart-product-name">{product.name}</div>
                <div className="cart-product-quantity">{obj.quantity}</div>
                <div className="cart-product-unit-price">{product.price}</div>

            </div>
        )
    }

    return (
        <div className="shopping-cart">
            {shoppingCart.map((e) => CartTable(e))}
        </div>
    )
}