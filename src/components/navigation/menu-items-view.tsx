import React from 'react'

import { List, ListItem } from './menu-items-view.styled'
import { MenuItems } from './navigation'
import UniversalLink from '../universal-link/universal-link'

interface MenuItemsViewProps {
  menuItems: MenuItems
}

const MenuItemsView = ({ menuItems }: MenuItemsViewProps) => {
  return (
    <List>
      {menuItems.map((menuItem, index) => {
        const { name, href, newTab } = menuItem
        return (
          <ListItem key={index}>
            <UniversalLink
              href={href}
              name={name}
              key={index}
              newTab={newTab}
            />
          </ListItem>
        )
      })}
    </List>
  )
}

export default MenuItemsView
