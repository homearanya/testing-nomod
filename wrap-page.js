import React from 'react'
import { CookiesProvider } from 'react-cookie'
import getUserLocale from 'get-user-locale'

import { LocaleProvider } from './src/context/locale-context'
import { getSiteDefaultLocale, buildLocalesArray } from './src/utils/helpers'
import locales from './src/i18n/locales.json'

export const wrapRoot = ({ element, ...rest }) => {
  const siteDefaultLocale = getSiteDefaultLocale(locales).toLowerCase()

  let browserDefaultLocale = siteDefaultLocale
  if (typeof window !== 'undefined') {
    const getCookie = document.cookie.match(
      '(^|;)\\s*nomodLocale\\s*=\\s*([^;]+)',
    )
    browserDefaultLocale = getCookie ? getCookie.pop() : undefined
    if (!browserDefaultLocale) {
      browserDefaultLocale = getUserLocale().toLowerCase()
    }
  }
  const [indexBrowserDefaultLocale, localesArray] = buildLocalesArray(
    locales,
    browserDefaultLocale,
  )

  return (
    <CookiesProvider>
      <LocaleProvider
        indexBrowserDefaultLocale={indexBrowserDefaultLocale}
        locales={localesArray}
        siteDefaultLocale={siteDefaultLocale}
        browserDefaultLocale={browserDefaultLocale}
      >
        {element}
      </LocaleProvider>
    </CookiesProvider>
  )
}
