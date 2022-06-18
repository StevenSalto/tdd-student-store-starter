import * as React from "react"
import { Link } from "react-router-dom"
import "./ProductCard.css"
//props: product, productId, quantity, handleAddItemToCart, handleRemoveItemFromCart, showDescription
export default function ProductCard(props) {
    return (
        <div className="product-card">
            <div className="product-name">{props.product.name}</div>
            <div className="product-price">{props.product.price}</div>
            <div className="product-description">{props.product.description}</div>
            <div className="media">
                <Link to={"/products/" + props.productId}><img src={props.product.image}/></Link>
            </div>
            <button className="add" onClick={() => {props.handleAddItemToCart(props.productId)}}>add</button>
            <button className="remove" onClick={() => {props.handleRemoveItemFromCart(props.productId)}}>remove</button>
            <div className="product-quanitity">{props.quantity}</div>
        </div>
    )
}