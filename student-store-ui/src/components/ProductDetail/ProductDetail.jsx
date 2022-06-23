import * as React from "react"
import ProductView from "../ProductView/ProductView"
import NotFound from "../NotFound/NotFound"
import "./ProductDetail.css"
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductDetail({handleAddItemToCart, handleRemoveItemFromCart}) {
    let productId = useParams().productId;
    const [producto, setProduct] = React.useState({});
    let url = 'https://codepath-store-api.herokuapp.com/store/' + productId;
    function getData() {
        axios.get(url)
        .then((res) => {setProduct(res.data.product); console.log(res, producto)})
        .catch((error) => {console.log(error); console.log(url, productId)})
        .finally(() => {console.log("ProductDetail, getData(): finished ")});
      }
    React.useState(() => {
        getData();
    })
    return (
        <div className="product-detail">
            <div>This is ProductDetail</div>
            <ProductCard product={producto} productId={productId} quantity={0} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} showDescription={true}/>
            <NotFound />
        </div>
    )
}