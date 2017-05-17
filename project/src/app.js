import React from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg'
import css from './app.scss'

const App = () => {
  return(
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Hello, world!</h1>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
