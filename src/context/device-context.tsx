import React, { createContext } from 'react'
import { isSafari, deviceType } from 'react-device-detect'

type StateType = {
  isSafari: boolean
  deviceType: string
}

interface DeviceContextProps {
  state: StateType
}

const initialState: DeviceContextProps = { state: { deviceType, isSafari } }
const DeviceContext = createContext(initialState)

const DeviceProvider = ({ children }) => {
  const { Provider } = DeviceContext

  return (
    <Provider value={{ state: { deviceType, isSafari } } as DeviceContextProps}>
      {children}
    </Provider>
  )
}
export { DeviceContext, DeviceProvider }
