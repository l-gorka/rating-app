import { useState, useEffect } from'react'
import instance from 'src/api'

type Method = 'get' | 'post' | 'put' | 'delete'

export const useFetch = (url: string, method: Method = 'get') => {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setData(null);
    setError(null);
    console.log('use fetch')
    instance[method](url)
    .then(res => {
      setData(res.data)
      setLoading(false);
    })
    .catch(err => {
        setLoading(false)
        setError('An error occurred. Awkward..')
    })
}, [url, method])

  return { isLoading, data, error }
}