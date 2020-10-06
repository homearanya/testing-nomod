import { useMemo } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { buildLocalesArray, getLocaleFromPath } from '../helpers'

const useFetchBrowserLocale = (siteDefaultLocale, path) => {
  const { allLocalesJson } = useStaticQuery(graphql`
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

  const locales = useMemo(
    () =>
      allLocalesJson.edges.map(({ node }) => {
        node.locale = node.locale.toLowerCase()
        return node
      }),
    [allLocalesJson],
  )

  const browserDefaultLocale = useMemo(() => {
    if (typeof window === 'undefined') {
      return siteDefaultLocale
    } else {
      const getCookie = document.cookie.match(
        '(^|;)\\s*nf_country\\s*=\\s*([^;]+)',
      )
      if (getCookie) {
        const locale = `en-${getCookie.pop()}`
        return locale.toLowerCase()
      } else {
        console.log(
          getLocaleFromPath(path, locales),
          getLocaleFromPath(path, locales).locale,
        )
        return getLocaleFromPath(path, locales).locale
      }
    }
  }, [siteDefaultLocale])

  const [indexBrowserDefaultLocale, localesArray] = useMemo(
    () => buildLocalesArray(locales, browserDefaultLocale),
    [browserDefaultLocale],
  )

  return [browserDefaultLocale, indexBrowserDefaultLocale, localesArray]
}

export default useFetchBrowserLocale
