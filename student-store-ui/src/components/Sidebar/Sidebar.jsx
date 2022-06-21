import * as React from "react"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import "./Sidebar.css"
//props: isOpen, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle
export default function Sidebar(props) {
  let toggleSidebar = (props.isOpen ? "open":"close")
  console.log(props.isOpen, props.shoppingCart)

  function SidebarComponents() {
    if(props.isOpen) {
      return (
        <div className="wrapper">
          <ShoppingCart isOpen={props.isOpen} products={props.products} shoppingCart={props.shoppingCart}/>
          <CheckoutForm/>
        </div>
      )
    } else {
      return (
        <div className="wrapper">

        </div>
      )
    }
  }

  return (
    <section className={"sidebar " + toggleSidebar}>
      <button className={"toggle-button"} onClick={props.handleOnToggle}>UwU</button>
      <SidebarComponents />
    </section>
  )
}
