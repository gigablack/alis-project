import React from 'react'
import './NavBar.scss'

const NavBar = () => {
    return (
        <nav className="bp3-navbar bp3-dark">
            <div className="nav"> {/*<!-- ADD ME -->*/}
                <div className="bp3-navbar-group bp3-align-left">
                <div className="bp3-navbar-heading"><h2 style={{fontFamily:"Emilys Candy, cursive"}}>ChildCare</h2></div>
                </div>
                <div className="bp3-navbar-group bp3-align-right">
                <button className="bp3-button bp3-minimal bp3-icon-home">Home</button>
                <span className="bp3-navbar-divider"></span>
                <button className="bp3-button bp3-minimal bp3-icon-user"></button>
                <button className="bp3-button bp3-minimal bp3-icon-log-out"></button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar