import React, { useEffect } from "react"
import { navigate } from "gatsby"
import { useIdentityContext } from "react-netlify-identity-widget"
import Layout from "../components/Layout/Layout.jsx"

const NotFoundPage = () => {
  const { isLoggedIn } = useIdentityContext()
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/app/patients")
    } else {
      navigate("/")
    }
  }, [isLoggedIn])
  return <Layout></Layout>
}

export default NotFoundPage
