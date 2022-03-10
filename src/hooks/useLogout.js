import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAppContext } from "./useAppContext";

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false)
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

      // update state only if isCancelled is false
      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      }
      
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message)  
        setError(err.message)
        setIsPending(false)
      }
      
    }
  }

  // returns a clean-up function
  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { logout, error, isPending } 
}     