import { useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAppContext } from "./useAppContext";

const useLogout = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const {  authDispatch } = useAppContext()

  const logout = async () => {
    setError(null)
    setIsPending(true)

    // sign the user out
    try {
      await projectAuth.signOut()

      // dispatch logout action
      authDispatch({ type: 'LOGOUT' })

      setIsPending(false)
      setError(null)
      
    } catch (err) {
      console.log(err.message)  
      setError(err.message)
      setIsPending(false)
    }
  }

  return { logout, error, isPending }
}