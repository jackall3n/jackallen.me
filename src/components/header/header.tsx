import React from "react"
import Burger from "../../../content/assets/burger-icon.svg"

import "./header.scss"

function Header() {
  return (
    <header className="site-header">
      <div className="site-header-contact">
        hello@jackallen.me
      </div>
      <nav>
        <li>Work</li>
        <li>Resume</li>
        <li>Services</li>
        <li>Contact</li>
      </nav>
      <div className="mobile">
        <Burger />
      </div>
    </header>
  )
}

export default Header
