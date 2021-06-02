import React, { createContext, useEffect, useReducer } from 'react'
import { State } from '../Interfaces'
import { reducer } from '../Reducer'

// API url
export const RANDOM_JOKE_API = 'https://api.icndb.com/jokes/random'
export const CATEGORY_JOKE_API = 'https://api.icndb.com/categories'

// setting the initial state type
const initialState: State = {
  hasClicked: false,
  lastName: 'Norris',
  firstName: 'Chuck',
  joke: {
    type: '',
    value: {
      id: '',
      joke: '',
      category: [],
    },
  },
}

// context creator
export const GlobalContext = createContext<{
  state: State
  dispatch: React.Dispatch<any>
}>({
  state: initialState,
  dispatch: () => null,
})

export const GlobalContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchDataJokes = async () => {
    const response = await fetch(RANDOM_JOKE_API)
    const result = await response.json()
    dispatch({ type: 'JOKES', joke: result, hasCliked: false })
  }

  useEffect(() => {
    fetchDataJokes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}
