import React, { useState } from "react"
import "./NavBar.scss"
import {
  useIdentityContext,
  IdentityModal,
} from "react-netlify-identity-widget"
import { navigate } from "gatsby"

const NavBar = () => {
  const { isLoggedIn, user } = useIdentityContext()
  const [dialog, setDialog] = useState(false)
  return (
    <nav className="bp3-navbar bp3-dark">
      <div className="nav">
        {" "}
        {/*<!-- ADD ME -->*/}
        <div className="bp3-navbar-group bp3-align-left">
          <div className="bp3-navbar-heading">
            <h2 style={{ fontFamily: "Emilys Candy, cursive" }}>ChildCare</h2>
          </div>
        </div>
        {isLoggedIn && (
          <div className="bp3-navbar-group bp3-align-right">
            <button
              className="bp3-button bp3-minimal bp3-icon-people"
              onClick={() => navigate("/app/patients")}
            >
              Pacientes
            </button>
            <span className="bp3-navbar-divider"></span>
            <button className="bp3-button bp3-minimal bp3-icon-user">
              {user.user_metadata.full_name}
            </button>
            <button
              className="bp3-button bp3-minimal bp3-icon-log-out"
              onClick={() => setDialog(true)}
            ></button>
          </div>
        )}
      </div>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogout={() => navigate("/")}
      />
    </nav>
  )
}

export default NavBar
