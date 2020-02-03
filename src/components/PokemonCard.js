import React from 'react'
import { Card } from 'semantic-ui-react'
// import { timingSafeEqual } from 'crypto'

class PokemonCard extends React.Component {
  
  state = {
    showFront: true
  }

  handleFrontBackImageToggle = () => this.setState({showFront: !this.state.showFront})

  render() {
    return (
      <Card>
        <div onClick={this.handleFrontBackImageToggle}>
          <div className="image">
            <img alt="oh no!" src={this.state.showFront? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back}/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name }</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[5].value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
