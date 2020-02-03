import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const BASE_URL = 'http://localhost:3000/pokemon/'

class PokemonPage extends React.Component {

  componentDidMount(){this.getPokemons()}

  state = {
    pokemons: [],
    searchTerm: 'all',
    alphabeticalSort: false
  }

  changeSortType = (value) => {
    // debugger
    this.setState({alphabeticalSort:!this.state.alphabeticalSort})
  }

  updateSearchTerm = (searchTerm) => {this.setState({searchTerm})}

  getPokemons = () => {
    return fetch(BASE_URL)
      .then(object => object.json())
      .then(data => {this.setState({ pokemons:data })})
  }

  getFilteredPokemons = () => {
    if (this.state.searchTerm==='all') {
      return [...this.state.pokemons]
    } else {
      return [...this.state.pokemons].filter(pokemon=>pokemon.name.includes(this.state.searchTerm))
    }
  }

  addNewPokemon = (newPokemonObject) =>{
    this.setState({pokemons: [...this.state.pokemons,newPokemonObject]})
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addNewPokemon={this.addNewPokemon}/>
        <br />
        <Search onChange={this.updateSearchTerm} changeSortType={this.changeSortType}/>
        {/* <Search onChange={() => console.log('🤔')} /> */}
        <PokemonCollection pokemons={
          this.state.alphabeticalSort
          ? this.getFilteredPokemons().sort((a,b)=>a.name>b.name ? 1 :-1)
          : this.getFilteredPokemons()
          }/>
      </Container>
    )
  }
}

export default PokemonPage
