import * as React from "react"
import "./ShoppingCart.css"

//props: isOpen, products, shoppingCart: itemId, quantity,
export default function ShoppingCart({isOpen, products, shoppingCart}) {
    function CartTable(obj) {
        console.log(obj, products[obj.itemId])
        let product = products[obj.itemId - 1];
        let productsPrice = product.price * obj.quantity;
        return (
            <div className="product" key={obj.itemId}>
                <div className="cart-product-name">{product.name}</div>
                <div className="cart-product-quantity">{obj.quantity}</div>
                <div className="cart-product-unit-price">{product.price}</div>
                <div className="cart-product-price">{productsPrice}</div>
                <div className="cart-subtotal"></div>
                <div className="cart-taxes-and-fees"></div>
                <div className="cart-total"></div>
            </div>
        )
    }

    return (
        <div className="shopping-cart">
            {shoppingCart.map((e) => CartTable(e))}
        </div>
    )
}