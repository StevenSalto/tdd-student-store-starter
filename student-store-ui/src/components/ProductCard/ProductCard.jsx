import * as React from "react"
import { Link } from "react-router-dom"
import "./ProductCard.css"
//props: product, productId, quantity, handleAddItemToCart, handleRemoveItemFromCart, showDescription
export default function ProductCard({product, productId, quantity=0, handleAddItemToCart, handleRemoveItemFromCart, showDescription=false}) {

    return (
        <div className="product-card">
            <div className="media">
                <Link to={"/products/" + productId}><img src={product.image}/></Link>
            </div>
            <div className="product-name">{product.name}</div>
            <div className="product-price">${product.price}</div>
            <div className="product-description" style={showDescription? {display: 'block'}:{display: 'none'}}>{product.description}</div>
            <button className="add" onClick={() => {handleAddItemToCart(productId)}}>Add2Kart</button>
            <button className="remove" onClick={() => {handleRemoveItemFromCart(productId)}}>RemoveFromKart</button>
            <div className="product-quanitity">{(quantity==0 ? "": quantity)}</div>
        </div>
    )
}