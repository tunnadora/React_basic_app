import React from 'react'

//1. class Component
class App extends React.Component
{

  render()
  { 
    //2. [1st argument is Custom then start with Capital latter] , [2nd is props] ,[3. innerHtml or text]
    //return React.createElement('h1',null,'This is element');
    return <h1 className="">className must write like this.. </h1>
  }
}

//3. stateless component
//const App = () => <h1>Sateless function</h1>

export default App