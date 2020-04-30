import React,{useEffect, useState} from "react"
import ChildSearch from "../../../ChildSearch/ChildSearch.jsx"
import { container } from "./ChildListPage.module.scss"
import CreateChildButton from "../../../CreateChildButton/CreateChildButton.jsx"
import ChildList from "../../../ChildList/ChildList.jsx"
import {useIdentityContext} from 'react-netlify-identity-widget'
import { useLazyQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { navigate } from 'gatsby'

const GET_USER_DATA = gql`
query getUserData($identity: String!){
  findDoctorByIdentity(identity:$identity){
    name
    lastname
    sex
  }
}
`

const ChildListPage = () => {
  const { user } = useIdentityContext()
  const [render,setRender] = useState(false)
  useEffect(()=>{
    if(user && user.user_metadata.name){
      setRender(true)
    } else if(user && !render && !user.user_metadata.name) {
      navigate('/app/new-doctor')
    }
  },[user,render])
  return render ? (
    <section className={container}>
      <div>
        <h1>Pacientes</h1>
        <CreateChildButton />
      </div>
      <ChildSearch />
      <ChildList />
    </section>
  ) : null
}

export default ChildListPage
