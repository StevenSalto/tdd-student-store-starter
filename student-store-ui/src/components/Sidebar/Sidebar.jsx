import * as React from "react"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import "./Sidebar.css"
//props: isOpen, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle
export default function Sidebar(props) {
  return (
    <section className="sidebar">
      <p>Sidebar</p>
      <button className="toggle-button" onClick={props.handleOnToggle}>Sidebar Button</button>
      <ShoppingCart />
      <CheckoutForm />
    </section>
  )
}
