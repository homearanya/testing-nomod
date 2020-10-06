import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import {
  StyledFooter,
  StyledContainer,
  BottomMenuWrapperMobile,
  BottomMenuWrapper,
  StyledStripeBadge,
  StyledLanguageSwitcher,
  StyledTwitterIcon,
  StyledAnchor,
  CopyRightWrapper,
  ComingSoonMenu,
} from './footer.styled'

import FooterMenuItems from '../footer-menu-items'
import FooterMenuMobile from '../footer-menu-mobile'
import { useLocaleState } from '../../context/locale-context'
import { getMenuLocalized } from '../../utils/helpers'

export type MenuItemType = {
  name: string
  href: string
  newTab?: boolean
}

export interface MenuProps {
  heading: string
  menuItems: MenuItemType[]
}

export interface MenuLocale {
  locale: string
  menus: MenuProps[]
}
interface FooterQueryData {
  readonly markdownRemark: {
    frontmatter: {
      locales: MenuLocale[]
    }
  }
}

interface FooterProps {
  readonly className?: string
  readonly noFooterTop?: boolean
  readonly comingSoon?: boolean
}

const Footer = ({
  className,
  noFooterTop = false,
  comingSoon = false,
}: FooterProps) => {
  const data: FooterQueryData = useStaticQuery(graphql`
    query FooterQuery {
      markdownRemark(fields: { slug: { eq: "/footer/" } }) {
        frontmatter {
          locales {
            locale
            menus {
              heading
              menuItems {
                name
                href
                newTab
              }
            }
          }
        }
      }
    }
  `)
  const { locales: menuLocales } = data.markdownRemark.frontmatter
  const { index, locales: siteLocales, siteDefaultLocale } = useLocaleState()
  const currentLocale = siteLocales[index].locale
  const menuLocale = getMenuLocalized(
    menuLocales,
    currentLocale,
    siteDefaultLocale,
  )
  const menus = menuLocale ? menuLocale.menus : []

  const today = new Date()
  // logic to fix rehydration issue
  const [isClient, setClient] = useState(false)
  const key = isClient ? 'client' : 'server'

  useEffect(() => {
    setClient(true)
  }, [])

  return (
    <StyledFooter
      className={`${className ? `${className}` : ''}`}
      noFooterTop={noFooterTop}
    >
      <StyledContainer comingSoon={comingSoon}>
        {comingSoon ? null : (
          <FooterMenuItems menus={menus} noFooterTop={noFooterTop} />
        )}
        {comingSoon ? null : <FooterMenuMobile menus={menus} />}
        <BottomMenuWrapperMobile comingSoon={comingSoon}>
          <BottomMenuWrapper
            comingSoon={comingSoon}
            className="bottom-menu-wrapper"
          >
            <>
              <StyledLanguageSwitcher comingSoon={comingSoon} />
              {comingSoon ? (
                <ComingSoonMenu>
                  <ul>
                    <li>
                      <Link to="/about/">About</Link>
                    </li>
                    <li>
                      <Link to="/cookies/">Cookies</Link>
                    </li>
                  </ul>
                </ComingSoonMenu>
              ) : (
                <StyledStripeBadge />
              )}
              <StyledAnchor
                className="twitter-icon"
                href="https://www.twitter.com/Nomod/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledTwitterIcon />
              </StyledAnchor>
            </>
          </BottomMenuWrapper>
        </BottomMenuWrapperMobile>
        <CopyRightWrapper key={key} className="copy-right">
          {currentLocale === 'en-gb' ? (
            <p>
              Copyright &copy; {today.getFullYear()} <span>Nomod Ltd,</span>
              &nbsp;27 Old Gloucester Street, London
            </p>
          ) : (
            <p>
              Copyright &copy; {today.getFullYear()} <span>Nomod Inc.</span>
              &nbsp;All Rights Reserved.
            </p>
          )}
        </CopyRightWrapper>
      </StyledContainer>
    </StyledFooter>
  )
}

export default Footer
