import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductView.css"

export default function ProductView(product, productId, quantity, handleAddItemToCart, handleRemoveItemToCart) {
    return (
        <div className="product-view">
            <ProductCard />
        </div>
    )
}