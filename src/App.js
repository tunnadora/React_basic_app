import React from 'react'

class App extends React.Component
{
  constructor()
  {
    super();
    this.state={ txt : "this is state text ." , count : 100}
  }

  update(e)
  {
    this.setState( {txt: e.target.value } )
  }
  render()
  {
    return(
      <div>
        <input type="text" onChange={this.update.bind(this)}/>
        <h1>{this.state.txt} -> count = {this.state.count}</h1>
      </div>
      )
  }

}


export default App