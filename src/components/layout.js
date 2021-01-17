import React from "react"
import { Link } from "gatsby"
import Header from "./header/header"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <>
      <Header />
      <div className={isRootPath ? "" : "global-wrapper"} data-is-root-path={isRootPath}>
        <main>{children}</main>
        <div className="global-wrapper">
          <footer className="global-footer">
            © {new Date().getFullYear()}, Built with ❤️
          </footer>
        </div>
      </div>
    </>
  )
}

export default Layout
