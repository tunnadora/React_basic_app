import React from 'react'

class App extends React.Component
{

  render()
  { let t2 = this.props.txt2 
  //1. use this.props to get value
    return (
      <div>
      <h1 >Props text1= {this.props.txt1} </h1>
      <h2>Props text2= {t2}</h2>
      </div>  )
  }
}



export default App