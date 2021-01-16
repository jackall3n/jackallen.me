import React from "react"

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
    </header>
  )
}

export default Header
