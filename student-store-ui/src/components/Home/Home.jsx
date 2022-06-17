import * as React from "react"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import "./Home.css"

export default function Home(products, handleAddItemToCart, handleRemoveItemToCart) {
  return (
    <div className="home">
      <p>Home</p>
      <Hero />
      <ProductGrid />
    </div>
  )
}
