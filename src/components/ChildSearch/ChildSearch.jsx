import React from "react"
import { container } from "./ChildSearch.module.scss"

const ChildSearch = () => {
  return (
    <form className={container}>
      <label htmlFor="search" className="bp3-label bp3-inline">
        Buscar Por:
        <div className="bp3-select">
          <select>
            <option selected>Propiedad</option>
            <option value="name">Nombre</option>
            <option value="lastname">Apellido</option>
            <option value="age">Edad</option>
            <option value="momname">Nombre de Madre</option>
          </select>
        </div>
        <div className="bp3-input-group">
          <span className="bp3-icon bp3-icon-search"></span>
          <input
            type="text"
            className="bp3-input"
            placeholder="Buscar"
            id="search"
          />
          <button
            className="bp3-button bp3-minimal bp3-intent-primary bp3-icon-arrow-right"
            type="submit"
          ></button>
        </div>
      </label>
    </form>
  )
}

export default ChildSearch
