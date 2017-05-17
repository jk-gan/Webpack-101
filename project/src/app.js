import React from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg'
import css from './app.scss'

const App = () => {
  return(
    <div>
      <h1><img src={logo} className="App-logo" alt="logo" />Hello, world!</h1>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
