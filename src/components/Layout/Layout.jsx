import React,{useEffect} from "react"
import NavBar from "../NavBar/NavBar.jsx"
import {useIdentityContext} from 'react-netlify-identity-widget'
import { useLazyQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const GET_USER_DATA = gql`
query getUserData($identity: String!){
  findDoctorByIdentity(identity:$identity){
    name
    lastname
    sex
  }
}
`

const Layout = ({ children }) => {
  const { user, setUser, logoutUser } = useIdentityContext()
  const [getUserData,{data, called}] = useLazyQuery(GET_USER_DATA)
  useEffect(()=>{
    if(user && !user.user_metadata.name){
      getUserData({ variables: { identity: user.id }})
    }
  },[user])
  useEffect(()=>{
    if(called && data && data.findDoctorByIdentity){
      const { name, lastname, sex } = data.findDoctorByIdentity
      setUser({
        ...user,
        logoutUser,
        user_metadata:{
          ...user.user_metadata,
          name,
          lastname,
          sex
        }
      })
    }
  },[data,called])
  return (
    <main>
      <header>
        <NavBar />
      </header>
      {children}
    </main>
  )
}

export default Layout
