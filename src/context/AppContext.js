import { createContext, useEffect, useReducer } from 'react'
import { projectAuth } from '../firebase/config'


export const AppContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload }
    case 'LOGOUT':
      return { ...state, user: null }
    case 'AUTH_IS_READY':
      return { ...state, user: action.payload, authIsReady: true }
    default:
      return state
  }
}


export const AppContextProvider = ({ children }) => {

  const [authState, authDispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false
  })

  useEffect(() => {
    const unsub = projectAuth.onAuthStateChanged((user) => {
      authDispatch({ type: 'AUTH_IS_READY', payload: user })
      unsub()
    })
  }, [])
  console.log('AppContext auth state:', authState)


  return (
    <AppContext.Provider value={{ ...authState, authDispatch }}>
      { children }
    </AppContext.Provider>
  )

}