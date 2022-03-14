import { useEffect, useState } from "react"

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async () => {
      setIsPending(true)

      try {
        const res = await fetch(url, { signal: controller.signal })
        if (!res.ok) {
          throw new Error(res.statusText)
        }
        const json = await res.json()

        setIsPending(false)
        setData(json)
        setError(null)
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('the fetch was aborted')
        } else {
          console.log(err.message)
          setIsPending(false)
          setError('Could not fetch the data')
        }
        
      }
      
    }

    fetchData()

    // return a clean up function
    return () => {
      controller.abort()
    }
  }, [url])

  return { data, error, isPending }
}