import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  // constructor() {
  //   super()

    state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  // }

  postNewPokemon = (newPokemonObject) => {
  let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newPokemonObject)
    };
  fetch("http://localhost:3000/pokemon/", configObj)
      .then(response=>response.json())
      .then(object=>{
        newPokemonObject.id = object.id;
        this.props.addNewPokemon(newPokemonObject)
        console.log(newPokemonObject)
      })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    //TODO: Post the new pokemon here!
    let newPokemonObject = {
      name: this.state.name,
      sprites: {
        frontUrl: this.state.frontUrl,
        backUrl: this.state.backUrl
      },
      stats: [
        {
        value: 100,
        name: "special-defense"
        },
        {
        value: 100,
        name: "special-attack"
        },
        {
        value: 83,
        name: "defense"
        },
        {
        value: 82,
        name: "attack"
        },
        {
        value: 80,
        name: "speed"
        },
        {
        value: this.state.hp,
        name: "hp"
        }
      ]
    }
    this.postNewPokemon(newPokemonObject)
  }

  handleFormElementChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input onChange={this.handleFormElementChange} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input onChange={this.handleFormElementChange} fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input onChange={this.handleFormElementChange} fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input onChange={this.handleFormElementChange} fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
