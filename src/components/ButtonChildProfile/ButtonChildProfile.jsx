import React from "react"
import { Link } from "gatsby"
import { Button } from "@blueprintjs/core"

const ButtonChildProfile = () => {
  return (
    <Link to="/app/new-child">
      <Button rightIcon="arrow-right" text="Perfil" />
    </Link>
  )
}

export default ButtonChildProfile
