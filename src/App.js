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
      <h1> Props Default = {this.props.txt3}</h1>
      </div>  )
  }
}

App.propTypes= {

txt1: React.PropTypes.string , 
//cat: React.ProTypes.number.isRequired
}

App.defaultProps={

  txt3: "This is 3rd Text..."
}

export default App