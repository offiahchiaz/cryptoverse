import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAppContext } from "./useAppContext";

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const {  authDispatch } = useAppContext()

  const login = async (email, password) => {
    setError(null)
    setIsPending(true)

    // sign the user out
    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password)

      // dispatch logout action
      authDispatch({ type: 'LOGIN', payload: res.user })

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

  return { login, error, isPending } 
}     