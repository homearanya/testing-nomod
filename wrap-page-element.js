import React from 'react'
// import getUserLocale from 'get-user-locale'

import { LocaleProvider } from './src/context/locale-context'
import { getSiteDefaultLocale } from './src/utils/helpers'
import useFetchBrowserLocale from './src/utils/hooks/useFetchBrowserLocale'
import locales from './src/i18n/locales.json'

const WrapPageElementWrapper = ({ children, props }) => {
  const siteDefaultLocale = getSiteDefaultLocale(locales).locale.toLowerCase()
  const [
    browserDefaultLocale,
    indexBrowserDefaultLocale,
    localesArray,
  ] = useFetchBrowserLocale(siteDefaultLocale)

  return (
    <LocaleProvider
      indexBrowserDefaultLocale={indexBrowserDefaultLocale}
      locales={localesArray}
      siteDefaultLocale={siteDefaultLocale}
      browserDefaultLocale={browserDefaultLocale}
    >
      {children}
    </LocaleProvider>
  )
}

export const wrapPageElement = ({ element, props }) => {
  return (
    <WrapPageElementWrapper props={props}>{element}</WrapPageElementWrapper>
  )
}
