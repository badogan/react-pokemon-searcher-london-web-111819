import React from 'react'

// const Search = props => {
  class Search extends React.Component{


  render(){
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={(event)=>this.props.onChange(event.target.value)} />
        <i className="search icon" />
      </div>
      <div>
        <br/>
        <label>
      <input onChange={(e)=>this.props.changeSortType(e.target.value)} type='checkbox' checked={this.props.alphabeticalSort}/>
      Sort alphabetically
      <br/>
      </label>
      <br/>
      </div>
    </div>
  )
  }
}

export default Search
