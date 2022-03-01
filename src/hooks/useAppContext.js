import { useContext } from "react"
import { AppContext } from "../context/AppContext"


export const useAppContext = () => {

  const context = useContext(AppContext)

  if (!context) {
    throw Error('useAthContext must be inside an AppContextProvider')
  }

  return context
}