import { createContext, useEffect, useReducer } from 'react'
import { projectAuth } from '../firebase/config'


export const AppContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload }
  
    default:
      return state
  }
}


export const AppContextProvider = ({ children }) => {

  const [authState, authDispatch] = useReducer(authReducer, {
    user: null
  })
  console.log('AppContext auth state:', authState)


  return (
    <AppContext.Provider value={{ ...authState, authDispatch }}>
      { children }
    </AppContext.Provider>
  )

}