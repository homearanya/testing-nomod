import React, { createContext, useReducer, useMemo } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

type LocaleIn = {
  locale: string
  default: boolean
  available: boolean
  country: string
  flag: string | { publicURL: string }
  dateFormat: string
  defaultTitle: string
  defaultDescription: string
}
type LocaleOut = {
  locale: string
  default: boolean
  available: boolean
  country: string
  flag: { publicURL: string }
  dateFormat: string
  defaultTitle: string
  defaultDescription: string
}

export type State = {
  index: number
  locales: LocaleOut[]
  browserDefaultLocale: string
  siteDefaultLocale: string
}

type Action = {
  type: 'select'
  payload: {
    index: number
  }
}

type Dispatch = (action: Action) => void

type LocaleProviderProps = {
  children: React.ReactNode
  indexBrowserDefaultLocale: number
  locales: LocaleIn[]
  siteDefaultLocale: string
  browserDefaultLocale: string
}

const reducer = (state: { index: number }, action: Action) => {
  const { type, payload } = action

  switch (type) {
    case 'select':
      return { index: payload.index }
    default:
      return state
  }
}

const LocaleStateContext = createContext<State | undefined>(undefined)

const LocaleDispatchContext = createContext<Dispatch | undefined>(undefined)

interface LocaleQueryData {
  readonly allLocalesJson: {
    edges: {
      node: LocaleOut
    }[]
  }
}

const LocaleProvider = ({
  children,
  indexBrowserDefaultLocale,
  locales: localesIn,
  siteDefaultLocale,
  browserDefaultLocale,
}: LocaleProviderProps) => {
  const {
    allLocalesJson: { edges },
  }: LocaleQueryData = useStaticQuery(graphql`
    query LocaleQuery {
      allLocalesJson {
        edges {
          node {
            default
            available
            locale
            country
            flag {
              publicURL
            }
            dateFormat
            defaultTitle
            defaultDescription
          }
        }
      }
    }
  `)

  const locales = useMemo(() => {
    localesIn.forEach(locale => {
      const nodeFound: { node: LocaleOut } | undefined = edges.find(
        ({ node }) => {
          return node.locale.toLowerCase() === locale.locale
        },
      )
      if (nodeFound) {
        const { node } = nodeFound
        if (node && node.flag && node.flag.publicURL) {
          locale.flag = { publicURL: node.flag.publicURL }
        }
      } else {
        locale.flag = { publicURL: '' }
      }
    })
    return localesIn
  }, [localesIn])

  const [{ index }, dispatch] = useReducer(reducer, {
    index: indexBrowserDefaultLocale,
  })

  return (
    <LocaleStateContext.Provider
      value={{
        index,
        locales: locales as LocaleOut[],
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
