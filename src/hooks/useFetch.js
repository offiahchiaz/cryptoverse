import { useEffect, useState } from "react"

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url)
      const json = await res.json()

      setData(json)
    }

    fetchData()
  }, [url])

  return { data, error, isPending }
}