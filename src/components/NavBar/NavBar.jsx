import React, { useState } from "react"
import "./NavBar.scss"
import {
  useIdentityContext
} from "react-netlify-identity-widget"
import { navigate } from "gatsby"
import { Popover, Menu, Position, Alert, Intent, Toast, Toaster } from '@blueprintjs/core'

const NavBar = () => {
  const { isLoggedIn, user } = useIdentityContext()
  const [openLogout,setOpenLogout] = useState(false)
  const [showToast,setShowToast] = useState(false)
  const [openMenu,setOpenMenu] = useState(false)
  const handleConfirmLogout = async () => {
    try {
      setOpenLogout(false)
      setShowToast(true)
      await user.logoutUser()
      setShowToast(false)
    } catch (error) {
      window.location.replace('/')
    }
  }
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
          <div className="bp3-navbar-group bp3-align-right big-menu">
            <button
              className="bp3-button bp3-minimal bp3-icon-people"
              onClick={() => navigate("/app/patients")}
            >
              Pacientes
            </button>
            <span className="bp3-navbar-divider"></span>
            <button className="bp3-button bp3-minimal bp3-icon-user">
              {user.user_metadata.name || user.user_metadata.full_name}
            </button>
            <button
              className="bp3-button bp3-minimal bp3-icon-log-out"
              onClick={() => setOpenLogout(true)}
            >Logout</button>
          </div>
        )}
        {isLoggedIn && (
          <div className="bp3-navbar-group bp3-align-right small-menu">
            <Popover content={
              <Menu>
                <Menu.Item text="Pacientes" icon="people" onClick={()=> navigate('/app/patients')} />
                <Menu.Divider />
                <Menu.Item text={user.user_metadata.name || user.user_metadata.full_name} icon="user" />
                <Menu.Item text="Logout" icon="log-out" onClick={()=> setOpenLogout(true)} />
              </Menu>
            } position={Position.BOTTOM_LEFT} onClosing={()=> setOpenMenu(false)}>
              <button className={`bp3-button bp3-minimal bp3-icon-${openMenu ? 'cross' : 'menu'}`} onClick={()=> setOpenMenu(true)} >
              </button>
            </Popover>
          </div>
        )}
      </div>
      <Alert cancelButtonText="Continuar" confirmButtonText="Salir" icon="log-out" intent={Intent.DANGER} isOpen={openLogout} onConfirm={handleConfirmLogout} onCancel={()=> setOpenLogout(false)} >
        <h3>¿Cerrar Sesión?</h3>
      </Alert>
      {showToast && (<Toaster position={Position.TOP} >
                      <Toast intent={Intent.DANGER} icon="hand" message="Hasta la próxima." timeout={2000} />
                    </Toaster>)}
    </nav>
  )
}

export default NavBar
