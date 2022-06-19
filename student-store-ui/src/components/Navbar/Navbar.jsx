import * as React from "react"
import Logo from "../Logo/Logo"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <div className="socials">socials</div>
      <ul className="links">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Buy Now</li>
      </ul>
    </nav>
  )
}
