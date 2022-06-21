import * as React from "react"
import { Link } from "react-router-dom"
import "./Logo.css"

export default function Logo() {
  return (
    <div className="logo"><Link to="/"><img className="logo_image" src="https://mlt.org/wp-content/uploads/2018/09/codepath-1x1_solid-transparent.png"/></Link></div>
  )
}
