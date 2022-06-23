import * as React from "react"
import ProductView from "../ProductView/ProductView"
import NotFound from "../NotFound/NotFound"
import "./ProductDetail.css"
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductDetail({handleAddItemToCart, handleRemoveItemFromCart}) {
    let productId = useParams().productId;
    const [product, setProduct] = React.useState({});
    let url = 'http://localhost:3001/store/' + productId;
    function getData() {
        axios.get(url)
        .then((res) => {setProduct(res.data)})
        .catch((error) => {console.log(error); console.log(url, product)})
        .finally(() => {console.log("ProductDetail, getData(): finished ", product)});
      }
    React.useEffect(() => {getData()},[]);
    return (
        <div className="product-detail">
            <ProductCard product={product} productId={productId} quantity={0} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} showDescription={true}/>
            <NotFound />
        </div>
    )
}

//            <ProductCard product={product} productId={productId} quantity={0} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} showDescription={true}/>
