import React, { createContext, useReducer } from 'react'

export type State = {
  index: number
  locales: Locale[]
  browserDefaultLocale: string
  siteDefaultLocale: string
}

type Action = {
  type: 'select' | 'set'
  payload: {
    index: number
  }
}

type Dispatch = (action: Action) => void

type LocaleProviderProps = {
  children: React.ReactNode
  indexBrowserDefaultLocale: number
  locales: Locale[]
  siteDefaultLocale: string
  browserDefaultLocale: string
}

const reducer = (
  state: { index: number; changedByUser: boolean; loaded: boolean },
  action: Action,
) => {
  const { type, payload } = action

  switch (type) {
    case 'select':
      return { index: payload.index }
    case 'set':
      return { index: payload.index }
    default:
      return state
  }
}

const LocaleStateContext = createContext<State | undefined>(undefined)

const LocaleDispatchContext = createContext<Dispatch | undefined>(undefined)

const LocaleProvider = ({
  children,
  indexBrowserDefaultLocale,
  locales,
  siteDefaultLocale,
  browserDefaultLocale,
}: LocaleProviderProps) => {
  const [{ index }, dispatch] = useReducer(reducer, {
    index: indexBrowserDefaultLocale,
  })

  return (
    <LocaleStateContext.Provider
      value={{
        index,
        locales,
        siteDefaultLocale,
        browserDefaultLocale,
      }}
    >
      <LocaleDispatchContext.Provider value={dispatch}>
        {children}
      </LocaleDispatchContext.Provider>
    </LocaleStateContext.Provider>
  )
}

const useLocaleState = () => {
  const context = React.useContext(LocaleStateContext)

  if (context === undefined) {
    throw new Error('useLocaleState must be used within a LocaleProvider')
  }
  return context
}

const useLocaleDispatch = () => {
  const context = React.useContext(LocaleDispatchContext)

  if (context === undefined) {
    throw new Error('useLocaleDispatch must be used within a LocaleProvider')
  }
  return context
}

export { LocaleStateContext, LocaleProvider, useLocaleState, useLocaleDispatch }
