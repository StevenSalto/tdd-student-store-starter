import * as React from "react"
import ProductView from "../ProductView/ProductView"
import NotFound from "../NotFound/NotFound"
import "./ProductDetail.css"

export default function ProductDetail(props) {
    //props: isOpen, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle
    return (
        <div className="product-detail">
            <div> This is ProductDetail</div>
            <ProductView />
            <NotFound />
        </div>
    )
}