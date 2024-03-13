import React from 'react'
import EntryApp from './EntryApp'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <appContext>
      <BrowserRouter>
        <EntryApp />    
      </BrowserRouter>
    </appContext>
  )
}

export default App



