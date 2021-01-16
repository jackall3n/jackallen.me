import React from "react"

import "./header.scss"

function Header() {
  return (
    <header className="site-header">
      <div>
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
