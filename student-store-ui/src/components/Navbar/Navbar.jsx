import * as React from "react"
import Logo from "../Logo/Logo"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <div className="socials">
        <img src="https://cdn-icons-png.flaticon.com/512/1051/1051382.png"/>
        <img src="https://cdn-icons-png.flaticon.com/512/1051/1051360.png"/>
        <img src="https://cdn-icons-png.flaticon.com/512/1051/1051364.png"/>
      </div>
      <ul className="links">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Buy Now</li>
      </ul>
    </nav>
  )
}
