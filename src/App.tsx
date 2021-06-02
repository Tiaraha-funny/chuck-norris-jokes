import React from 'react'
import './App.css'
import DisplayRandomJokes from './GlobalComponent/DisplayRandomJokes'
import { GlobalContextProvider } from './GlobalComponent/GlobalContext'
import { GlobalStyle } from './GlobalComponent/GlobalStyle'

function App() {
  return (
    <GlobalContextProvider>
      <GlobalStyle />
      <DisplayRandomJokes />
    </GlobalContextProvider>
  )
}

export default App
