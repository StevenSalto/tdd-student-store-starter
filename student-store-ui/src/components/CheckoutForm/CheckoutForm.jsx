import * as React from "react"
import "./CheckoutForm.css"
//props: isOpen, shoppingCart, quantity, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm
export default function CheckoutForm({isOpen, shoppingCart, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm}) {
    console.log("checkoutForm", checkoutForm );
    return (
        <div className="checkout-form">
            <input className="checkout-form-input" type="email" name="email" placeholder="student@codepath.org" value={checkoutForm.email} onChange={handleOnCheckoutFormChange}/>
            <input className="checkout-form-input" type="text" name="name" placeholder="Student Name" value={checkoutForm.name} onChange={handleOnCheckoutFormChange}/>
            <button className="checkout-button" onClick={handleOnSubmitCheckoutForm}>Checkout</button>
        </div>
    )
}