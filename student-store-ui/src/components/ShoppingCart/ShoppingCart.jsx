import * as React from "react"
import "./ShoppingCart.css"

//props: isOpen, products, shoppingCart: itemId, quantity,
export default function ShoppingCart({isOpen, products, shoppingCart}) {
    var subtotal = 0;
    function CartTable(obj) {
        console.log(obj, products[obj.itemId])
        let product = products[obj.itemId - 1];
        let productsPrice = product.price * obj.quantity;
        subtotal += productsPrice;
        return (
            <div className="product" key={obj.itemId}>
                <div className="cart-product-name">{product.name}</div>
                <div className="cart-product-quantity">quantity: {obj.quantity}</div>
                <div className="cart-product-unit-price">unit price: ${product.price}</div>
                <div className="cart-product-price">quant. x unitprice: ${productsPrice}</div>
            </div>
        )
    }

    return (
        <div className="shopping-cart">
            {shoppingCart.map((e) => CartTable(e))}

            <div className="cart-subtotal">subtotal: ${subtotal}</div>
            <div className="cart-taxes-and-fees">taxes and fees: ${subtotal*0.0875}</div>
            <div className="cart-total">total: ${subtotal*1.0875}</div>
        </div>
    )
}