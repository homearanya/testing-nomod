import { useState, useEffect } from 'react'

export default function useNetwork() {
  const [isOnline, setNetwork] = useState(
    typeof window !== 'undefined' ? window.navigator.onLine : false,
  )
  const updateNetwork = () => {
    if (typeof window !== 'undefined') {
      setNetwork(window.navigator.onLine)
    }
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('offline', updateNetwork)
      window.addEventListener('online', updateNetwork)
      return () => {
        window.removeEventListener('offline', updateNetwork)
        window.removeEventListener('online', updateNetwork)
      }
    }
  })
  return isOnline
}
