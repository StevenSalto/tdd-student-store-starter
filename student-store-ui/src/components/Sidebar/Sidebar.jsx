import * as React from "react"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import "./Sidebar.css"
//props: isOpen, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle
export default function Sidebar(props) {
  console.log(props.isOpen)
  return (
    <section className="sidebar">
      <button className="toggle-button" onClick={props.handleOnToggle}>Sidebar Button</button>
      <div className="sidebar-components" style={{display: (props.isOpen ? "flex":"none")}}>Sidebar</div>
      <ShoppingCart className="sidebar-components" style={{display: (props.isOpen ? "flex":"none")}}/>
      <CheckoutForm className="sidebar-components" style={{display: (props.isOpen ? "flex":"none")}}/>
    </section>
  )
}
