import React, { useEffect } from "react"
import Layout from "../components/Layout/Layout.jsx"
import Particles from "react-particles-js"
import CardLogin from "../components/CardLogin/CardLogin.jsx"
import "./index.scss"
import { useIdentityContext } from "react-netlify-identity-widget"
import { navigate } from "gatsby"

const HomePage = () => {
  const { isLoggedIn } = useIdentityContext()
  useEffect(() => {
    if (isLoggedIn) navigate("/app/patients")
  }, [isLoggedIn])
  return (
    <Layout>
       {!isLoggedIn && (<section className="container">
        <CardLogin />
        <Particles
          params={{
            particles: {
              number: {
                value: 160,
                density: {
                  enable: false,
                },
              },
              size: {
                value: 10,
                random: true,
              },
              move: {
                direction: "bottom",
                out_mode: "out",
                speed: 1,
              },
              line_linked: {
                enable: false,
              },
            },
            interactivity: {
              events: {
                onclick: {
                  enable: true,
                  mode: "remove",
                },
              },
              modes: {
                remove: {
                  particles_nb: 10,
                },
              },
            },
          }}
        />
      </section>)}
    </Layout>
  )
}

export default HomePage
