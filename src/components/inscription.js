import React from "react"
import { navigate } from "gatsby";




class Formulaire extends React.Component {

    constructor(props){
        super(props)

        this.state = {

            nom: '',
            prenom: '',
            email: '',
            checked: false
        }
    }
    
    handleSubmit = event => {
        event.preventDefault();
        console.log(event)
        const {nom, prenom, email, checked} = this.state

        if (checked === true){

            navigate ("/confirm", {

                state: {nom, prenom, email}
            })

        } else {

            alert("Accepter les conditions du site pour vous inscrire")
        }
    }

    handleChange = event =>{
        event.preventDefault();

        this.setState({[event.target.name]: event.target.value })

    }

    handleCheck = () => {

        const check = this.state.checked
        this.setState({checked: !check})
    }

    

    



    render(){


        const { nom, prenom, email, checked} = this.state


        return(

                    <div className="form-wrapper">
                        <form onSubmit={this.handleSubmit}>

                            <div className="nom">
                                <label htmlFor="nom">Nom :</label>
                                <input name="nom" type="text" onChange={this.handleChange} value={nom} />
                            </div>
                            

                            <div className="prenom">
                                <label htmlFor="prenom">prenom :</label>
                                <input name="prenom" type="text" onChange={this.handleChange} value={prenom} />
                            </div>


                            <div className="email">
                                <label htmlFor="email">Email :</label>
                                <input name="email" type="email" onChange={this.handleChange} value={email} />
                            </div>

                            <div>
                            <input type="checkbox" name="checked" onChange={this.handleCheck} checked={checked} />
                            <label htmlFor="checked">J'accepte les conditions du site  </label>
                            </div>

                            <div className="bouton">

                            <button onSubmit={this.handleSubmit}> Valider </button>
                            </div>

                        </form>
                    </div>
          
        )
    }
}

export default Formulaire