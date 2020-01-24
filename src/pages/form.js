import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Formulaire from "../components/inscription"

class Form extends React.Component {
  render() {

    return (
      <Layout>
        <SEO title="ACCUEIL" />
        <h1> Formulaire </h1>

        <p> Veuillez remplir le formulaire ci dessous !</p>
        <Formulaire />


      </Layout>
    )
  }
}

export default Form
