import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import { DeviceContext } from '../context/device-context'
import GlobalStyles from '../styles/global.styled'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import media, { $breakpoints, $maxWidth } from '../styles/media'
import Navigation from './navigation'
import Footer from './footer'
import CookieConsentModal from './cookie-consent'
import { useLocaleState } from '../context/locale-context'
import { localisePath } from '../utils/helpers'

type NavigateOptions = {
  replace: boolean
}

export interface PageProps {
  path: string
  navigate: (to: string, options: NavigateOptions) => void
}

export interface LayoutProps {
  readonly children?: React.ReactNode | readonly React.ReactNode[]
  readonly className?: string
  readonly pageProps: PageProps
  readonly noFooterTop?: boolean
  readonly comingSoon?: boolean
  readonly showSignUp?: boolean
  readonly handlerSetFocus?: () => void
}

const Layout = ({
  children,
  className,
  noFooterTop = false,
  comingSoon = false,
  showSignUp = false,
  handlerSetFocus,
  pageProps,
}: LayoutProps) => {
  const {
    allSitePage: { edges: allSitePageEdges },
  } = useStaticQuery(graphql`
    {
      allSitePage {
        edges {
          node {
            path
          }
        }
      }
    }
  `)

  const allPaths = allSitePageEdges.map(({ node: { path } }) => path)
  // const allPaths = []

  const {
    state: { isSafari },
  } = useContext(DeviceContext)
  const baseTheme: DefaultTheme = {
    awesomegrid: {
      mediaQuery: 'only screen',
      columns: {
        xs: 4,
        sm: 8,
        md: 12,
        lg: 12,
        xl: 12,
      },
      // 1 rem: 10px (changed by global styles)
      gutterWidth: {
        xs: 1.5,
        sm: 1.5,
        md: 3,
        lg: 3,
        xl: 3,
      },
      // 1 rem: 10px (changed by global styles)
      paddingWidth: {
        xs: 2.5,
        sm: 3.5,
        md: 3.5,
        lg: 8,
        xl: 11.5,
      },
      // 1 rem: 10px (changed by global styles)
      container: {
        xs: 'full', // 'full' = max-width: 100%
        sm: 'full', // 'full' = max-width: 100%
        md: 'full', // 'full' = max-width: 100%
        lg: 'full', // 'full' = max-width: 100%
        xl: $maxWidth / 10, // 1920rem
      },
      // 1 rem: 16px
      // In Safari 1 rem according to html element = 10px
      breakpoints: {
        xs: $breakpoints.xs * (isSafari ? 1.6 : 1),
        sm: $breakpoints.sm * (isSafari ? 1.6 : 1),
        md: $breakpoints.md * (isSafari ? 1.6 : 1),
        lg: $breakpoints.lg * (isSafari ? 1.6 : 1),
        xl: $breakpoints.xl * (isSafari ? 1.6 : 1),
      },
    },
  }
  const { path, navigate } = pageProps
  const {
    index,
    locales,
    browserDefaultLocale,
    siteDefaultLocale,
  } = useLocaleState()

  const localisedPath =
    locales && locales.length > 0
      ? localisePath(
          path,
          locales[index].locale,
          browserDefaultLocale,
          siteDefaultLocale,
          locales,
          allPaths,
        )
      : ''

  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])
  useEffect(() => {
    if (localisedPath !== path) {
      navigate(localisedPath, { replace: true })
    }
  }, [index, localisedPath, path])

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={baseTheme}>
        <div
          style={{
            opacity:
              hasMounted && localisedPath && localisedPath === path ? 1 : 0,
          }}
        >
          <Navigation
            className={className}
            comingSoon={comingSoon}
            showSignUp={showSignUp}
            handlerSetFocus={handlerSetFocus}
          />
          <Main className={className} role="main">
            {children}
          </Main>
          <Footer
            className={className}
            noFooterTop={noFooterTop}
            comingSoon={comingSoon}
          />
          <CookieConsentModal />
        </div>
        {/* <ScrollUp /> */}
      </ThemeProvider>
    </>
  )
}

export default Layout

export const Main = styled.main`
  margin-top: 9rem;

  ${media.lessThan('sm')`
    margin-top: 5rem!important;
  `};
`
