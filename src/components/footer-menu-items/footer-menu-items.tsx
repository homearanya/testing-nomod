import React from 'react'

import { MenuProps } from '../footer'
import {
  MenusRow,
  MenuHeading,
  MenuCol,
  ListItem,
  StyledTag,
} from './footer-menu-items.styled'

import UniversalLink from '../universal-link'

interface FooterMenuItemsProps {
  menus: MenuProps[]
  noFooterTop?: boolean
}

const FooterMenuItems = ({
  noFooterTop = false,
  menus,
}: FooterMenuItemsProps) => {
  return (
    <MenusRow justify={{ sm: 'space-between' }} noFooterTop={noFooterTop}>
      {menus.map(({ heading, menuItems }, index) => {
        return (
          <MenuCol xs={4} sm={1} md={2} lg={3} key={index}>
            <MenuHeading>{heading}</MenuHeading>
            <ul>
              {menuItems && menuItems.length > 0
                ? menuItems.map((menuItem, index) => {
                    const { href, name, newTab = true } = menuItem
                    return (
                      <ListItem key={index}>
                        <UniversalLink
                          href={href}
                          name={name}
                          newTab={newTab}
                          key={index}
                        />
                        {name === 'Teams' || name === 'Terminal' ? (
                          <StyledTag>Coming soon</StyledTag>
                        ) : null}
                      </ListItem>
                    )
                  })
                : null}
            </ul>
          </MenuCol>
        )
      })}
    </MenusRow>
  )
}

export default FooterMenuItems
