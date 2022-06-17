import * as React from "react"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import "./Sidebar.css"

export default function Sidebar(isOpen, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle) {
  return (
    <section className="sidebar">
      <p>Sidebar</p>
      <button className="toggle-button">Sidebar Button</button>
      <ShoppingCart />
      <CheckoutForm />
    </section>
  )
}
