import React from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg'
import css1 from './app.scss'
import css2 from './abc.css'

const App = () => {
  return(
    <div>
      <h1><img src={logo} className="App-logo" alt="logo" />Hello, world!</h1>
      <p>This is the content!</p>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
