import React from "react"
import ChildListItem from "../ChildListItem/ChildListItem.jsx"
import { container } from "./ChildList.module.scss"

const ChildList = () => {
  return (
    <ul className={container}>
      <ChildListItem name="Harry Potter" sex="male" />
      <ChildListItem name="Hermione Granger" sex="female" />
      <ChildListItem name="Ronald Weasley" sex="male" />
    </ul>
  )
}

export default ChildList
