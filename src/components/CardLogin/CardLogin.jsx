import React, { useState } from "react"
import { Card, Elevation, Button } from "@blueprintjs/core"
import { container } from "./CardLogin.module.scss"
import { IdentityModal } from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css"
import { navigate } from "gatsby"

const CardLogin = () => {
  const [dialog, setDialog] = useState(false)
  const handleLogin = () => {
    navigate("/app/patients")
  }
  return (
    <Card elevation={Elevation.TWO} interactive={true} className={container}>
      <img src="/alis-logo.png" alt="logo" />
      <h1>ChildCare</h1>
      <Button
        large={true}
        intent="primary"
        rightIcon="log-in"
        onClick={() => setDialog(true)}
      >
        Login
      </Button>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={handleLogin}
        onSignup={handleLogin}
      />
    </Card>
  )
}

export default CardLogin
