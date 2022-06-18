import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"


//props: products, handleAddItemToCart, handleRemoveItemFromCart
export default function ProductGrid(props) {
    return (
        <div className="product-grid">
            <div>product grid</div>
            {props.products.map((prod) => (<ProductCard key={prod.id} product={prod} productId={prod.id} quantity={0} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart} showDescription={false}/>))}
        </div>
    )
}