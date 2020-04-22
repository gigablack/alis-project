import React from "react"
import NavBar from "../NavBar/NavBar.jsx"

const Layout = ({ children }) => {
  return (
    <main>
      <header>
        <NavBar />
      </header>
      {children}
    </main>
  )
}

export default Layout
