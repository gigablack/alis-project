import React from "react"
import { Link } from "gatsby"

const CreateChildButton = () => {
  return (
    <Link to="/app/new-child">
      <button type="button" class="bp3-button bp3-icon-new-person">
        Nuevo Paciente
      </button>
    </Link>
  )
}

export default CreateChildButton
