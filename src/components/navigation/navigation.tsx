import React, { useState, useRef, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { CustomContainer } from '../../styles/common.styled'
import useOnClickOutside from '../../utils/hooks/useOnClickOutside'

import { StyledNavigation, Logo, Nav, Background } from './navigation.styled'

import Burger from '../burger'
import MobileMenu from '../mobile-menu'
import MenuItemsView from './menu-items-view'
import SignUpButton from '../sign-up-button'
import Image from '../image'
import { ImageBlock } from '../../types'
import { useLocaleState } from '../../context/locale-context'
import { getMenuLocalized } from '../../utils/helpers'

export type MenuItems = {
  name: string
  href: string
  newTab?: boolean
  onClick: () => void
  subMenuItems?: {
    name: string
    href: string
    newTab?: boolean
  }[]
}[]

export interface MenuLocale {
  locale: string
  menuItems: MenuItems
}

interface NavigationQueryData {
  readonly markdownRemark: {
    frontmatter: {
      logo: ImageBlock
      locales: MenuLocale[]
    }
  }
}
interface NavigationProps {
  readonly className?: string
  readonly comingSoon?: boolean
  readonly showSignUp?: boolean
  readonly handlerSetFocus?: () => void
}
const Navigation = ({
  className,
  comingSoon = false,
  showSignUp = false,
  handlerSetFocus,
}: NavigationProps) => {
  const ref = useRef(null)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useOnClickOutside(ref, () => setOpen(false))

  const handleScroll = () => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 32) {
      setHasScrolled(true)
    } else {
      setHasScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  })

  const {
    markdownRemark: { frontmatter },
  }: NavigationQueryData = useStaticQuery(graphql`
    query NavigationQuery {
      markdownRemark(fields: { slug: { eq: "/top-menu/" } }) {
        frontmatter {
          logo {
            src {
              publicURL
            }
            alt
          }
          locales {
            locale
            menuItems {
              name
              href
              newTab
            }
          }
        }
      }
    }
  `)
  const {
    logo: { src, alt },
    locales: menuLocales,
  } = frontmatter

  const { index, locales: siteLocales, siteDefaultLocale } = useLocaleState()

  const menuLocale = getMenuLocalized(
    menuLocales,
    siteLocales[index].locale,
    siteDefaultLocale.locale.toLowerCase(),
  )
  const menuItems = menuLocale ? menuLocale.menuItems : []
  return (
    <>
      <StyledNavigation
        ref={ref}
        className={`${className ? `${className}` : ''}${
          hasScrolled ? ' scrolled' : ''
        }`}
        open={open}
      >
        <CustomContainer>
          <Nav>
            <Logo to="/">
              <Image image={src} alt={alt} />
            </Logo>
            {comingSoon ? null : <MenuItemsView menuItems={menuItems} />}
            {comingSoon ? (
              <SignUpButton show={showSignUp} handlerSetFocus={handlerSetFocus}>
                Sign Up
              </SignUpButton>
            ) : null}
            {comingSoon ? null : <Burger open={open} setOpen={setOpen} />}
          </Nav>
        </CustomContainer>
        <MobileMenu menuItems={menuItems} open={open} />
      </StyledNavigation>
      <Background open={open} />
    </>
  )
}

export default Navigation
