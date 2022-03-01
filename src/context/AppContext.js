import { createContext, useEffect, useReducer } from 'react'
import { projectAuth } from '../../firebase/config'

export const AppContext = createContext()

export const appReducer = (state, action) => {

}


export const AppContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(appReducer, {
    user: null,
    authIsReady: false
  })

  // useEffect(() => {
  //   const unsub = projectAuth.onAuthStateChanged((user) => {
  //     dispatch()
  //     unsub()
  //   })
  // }, [])

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AppContext.Provider>
  )

}