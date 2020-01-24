import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"


class confirm extends React.Component {

    constructor(props){
        super(props)

        this.state = {
          nom: "",
          prenom: "",
          email: ""          

        }

    }

    componentDidMount(){

      this.setState({
        nom: this.props.location.state.nom,
        prenom: this.props.location.state.prenom,
        email: this.props.location.state.email,
      })
       


    }


  render() {

    const {nom, prenom, email} = this.state

    return (
      <Layout>
        <SEO title="Confirmation Formulaire" />
        <h1> Formulaire </h1>

        
       <b>Merci de votre inscription {nom} {prenom}!</b>

       <p>Un mail vien d'être envoyé à {email}</p>


      </Layout>
    )
  }
}

export default confirm
