import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Wrapper, List, ListItem, StyledLink } from './additional-menu.styled'
import { MenuLocale } from '../navigation'
import { useLocaleState } from '../../context/locale-context'
import { getMenuLocalized } from '../../utils/helpers'

interface AdditionalMenuQueryData {
  readonly markdownRemark: {
    frontmatter: {
      locales: MenuLocale[]
    }
  }
}

interface AdditionalMenuProps {
  className?: string
}

const AdditionalMenu = ({ className }: AdditionalMenuProps) => {
  const {
    markdownRemark: { frontmatter },
  }: AdditionalMenuQueryData = useStaticQuery(graphql`
    query AdditionalMenuQuery {
      markdownRemark(fields: { slug: { eq: "/terms-menu/" } }) {
        frontmatter {
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

  const { locales: menuLocales } = frontmatter
  const { index, locales: siteLocales, siteDefaultLocale } = useLocaleState()

  const menuLocale = getMenuLocalized(
    menuLocales,
    siteLocales[index].locale,
    siteDefaultLocale.locale.toLowerCase(),
  )
  const menuItems = menuLocale ? menuLocale.menuItems : []

  let hrefCount = 0
  menuItems.forEach(menuItem => (hrefCount += menuItem.href ? 1 : 0))

  return (
    <Wrapper
      className={className}
      style={hrefCount < 2 ? { display: 'none' } : {}}
    >
      <List>
        {menuItems.map((menuItem, index) => {
          const { name, href, newTab } = menuItem
          return (
            <ListItem key={index}>
              {href ? (
                <StyledLink href={href} newTab={newTab}>
                  {name}
                </StyledLink>
              ) : null}
            </ListItem>
          )
        })}
      </List>
    </Wrapper>
  )
}

export default AdditionalMenu
