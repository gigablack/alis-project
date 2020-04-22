import React, { useEffect } from "react"
import Layout from "../components/Layout/Layout.jsx"
import { Router } from "@reach/router"
import NewDoctor from "../components/App/Pages/NewDoctor/NewDoctor.jsx"
import { useIdentityContext } from "react-netlify-identity-widget"
import { navigate } from "gatsby"
import ChildListPage from "../components/App/Pages/ChildListPage/ChildListPage.jsx"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useIdentityContext()
  useEffect(() => {
    if (!isLoggedIn) navigate("/")
  }, [isLoggedIn])
  return isLoggedIn ? <Component {...rest} /> : null
}

const NotFound = () => {
  const { isLoggedIn } = useIdentityContext()
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/")
    } else {
      navigate("/app/patients")
    }
  }, [isLoggedIn])
  return null
}

const App = () => {
  return (
    <Layout>
      <Router>
        <PrivateRoute path="/app/new-doctor" component={NewDoctor} />
        <PrivateRoute path="/app/patients" component={ChildListPage} />
        <NotFound default />
      </Router>
    </Layout>
  )
}

export default App
