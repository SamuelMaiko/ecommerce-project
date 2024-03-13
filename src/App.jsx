import React from 'react'
import EntryApp from './EntryApp'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppContext from './context/AppContext'

const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <EntryApp />    
      </BrowserRouter>
    </AppContext>
  )
}

export default App



