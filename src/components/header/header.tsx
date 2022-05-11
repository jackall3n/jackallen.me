import React from "react"

import "./header.scss"
import { BurgerIcon } from "../Icons/BurgerIcon"

function Header() {
  return (
    <header className="site-header">
      <div>
        <img src="/assets/logo.png"/>
      </div>
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
        <BurgerIcon />
      </div>
    </header>
  )
}

export default Header
