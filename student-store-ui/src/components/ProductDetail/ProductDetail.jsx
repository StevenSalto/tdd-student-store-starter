import * as React from "react"
import ProductView from "../ProductView/ProductView"
import NotFound from "../NotFound/NotFound"
import "./ProductDetail.css"

export default function ProductDetail(handleAddItemToCart, handleRemoveItemToCart) {
    return (
        <div className="product-detail">
            <p>This is ProductDetail</p>
            <ProductView />
            <NotFound />
        </div>
    )
}