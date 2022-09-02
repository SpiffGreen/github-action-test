import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React</h1>
      <div className="card">
        <p>
          Change my code on <a href="https://github.com/SpiffGreen/github-action-test">Github</a>, I'll change :)
        </p>
      </div>
      <p className="read-the-docs">
        Live site <a href="http://13.52.163.121/">http://13.52.163.121/</a>
      </p>
    </div>
  )
}

export default App
