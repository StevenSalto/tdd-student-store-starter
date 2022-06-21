import * as React from "react"
import Hero from "../Hero/Hero"
import ProductCard from "../ProductCard/ProductCard"
import ProductGrid from "../ProductGrid/ProductGrid"
import "./Home.css"

//props: products, handleAddItemToCart, handleRemoveItemFromCart
export default function Home(props) {

  return (
    <div className="home">
      <Hero />
      <ProductGrid products={props.products} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart}/>
    </div>
  )
}
