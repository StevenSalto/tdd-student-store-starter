import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound"
import Footer from "../Footer/Footer"
import axios from "axios"
import "./App.css"

export default function App() {
  const [products, setProducts] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(false);
  const [error, setError] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const [shoppingCart, setShoppingCart] = React.useState([]);
  const [checkoutForm, setCheckoutForm] = React.useState("")

  React.useEffect(() => {getData()},[]);

  function getData() {
    axios.get('https://codepath-store-api.herokuapp.com/store')
    .then(res => {res.data.products.forEach((pro) => {setProducts(prevProducts => [...prevProducts, pro])})})
    .catch((error) => {console.log(error)})
    .finally(() => {console.log("getData(): finished")});
  }

  function handleOnToggle() {
    setIsOpen(prevIsOpen => (prevIsOpen ? false:true));
  }
  function handleAddItemToCart(productId) {
    let itemIndex = shoppingCart.findIndex(obj => {obj.itemId === productId});
    if(itemIndex != -1){
      setShoppingCart(prevShoppingCart => {prevShoppingCart[itemIndex].quantity += 1; return prevShoppingCart});
    }else{
      setShoppingCart(prevShoppingCart => [...prevShoppingCart, {itemId: productId, quantity: 1}]);
    }
  }
  function handleRemoveItemFromCart(productId) {
    let itemIndex = shoppingCart.findIndex(obj => {obj.itemId === productId});
    if(itemIndex != -1){
      setShoppingCart(prevShoppingCart => {prevShoppingCart[itemIndex].quantity -= 1; return prevShoppingCart});
      if(shoppingCart[itemIndex].quantity <= 0) {
        setShoppingCart(prevShoppingCart => {prevShoppingCart.splice(itemIndex, 1); return prevShoppingCart});
      }
    }
  }
  function handleOnCheckoutFormChange() {

  }
  function handleOnSubmitCheckoutForm() {

  }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/>}/>
            <Route path="/products/:productId" element={<ProductDetail />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  )
}
