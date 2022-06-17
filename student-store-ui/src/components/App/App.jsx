import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound"
import Footer from "../Footer/Footer"
import "./App.css"

export default function App() {
  return (
    <div className="app">
      {console.log("Start App.jsx")}
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar />
          <Home />
          <ProductDetail />
          <NotFound />
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  )
}
