import { useMemo } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { buildLocalesArray, localisePath } from '../helpers'

const useFetchBrowserLocale = siteDefaultLocale => {
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
        return locale
      } else {
        return siteDefaultLocale
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
