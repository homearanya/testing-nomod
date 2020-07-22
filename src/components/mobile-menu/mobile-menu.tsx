// Burger.js
import React, { useEffect } from 'react'

import { StyledRow, StyledCol, List, ListItem } from './mobile-menu.styled'
import { MenuItems } from '../navigation/navigation'

import UniversalLink from '../universal-link'

interface MobileMenuProps {
  menuItems: MenuItems
  open: boolean
}
const MobileMenu = ({ menuItems, open }: MobileMenuProps) => {
  useEffect(() => {
    // Update the document title using the browser API
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  })
  return (
    <StyledRow open={open}>
      <StyledCol xs={4}>
        <List>
          {menuItems.map((menuItem, index) => {
            const { name, href } = menuItem
            return (
              <ListItem key={index} href={href}>
                <UniversalLink href={href} name={name} key={index} />
              </ListItem>
            )
          })}
        </List>
      </StyledCol>
    </StyledRow>
  )
}

export default MobileMenu
