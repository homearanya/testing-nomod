import React from 'react'
import { CookiesProvider } from 'react-cookie'
import { DeviceProvider } from './src/context/device-context'

export const wrapRootElement = ({ element }) => {
  return (
    <CookiesProvider>
      <DeviceProvider>{element}</DeviceProvider>
    </CookiesProvider>
  )
}
