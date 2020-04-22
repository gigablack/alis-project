import React from "react"
import ChildSearch from "../../../ChildSearch/ChildSearch.jsx"
import { container } from "./ChildListPage.module.scss"
import CreateChildButton from "../../../CreateChildButton/CreateChildButton.jsx"
import ChildList from "../../../ChildList/ChildList.jsx"

const ChildListPage = () => {
  return (
    <section className={container}>
      <div>
        <h1>Pacientes</h1>
        <CreateChildButton />
      </div>
      <ChildSearch />
      <ChildList />
    </section>
  )
}

export default ChildListPage
