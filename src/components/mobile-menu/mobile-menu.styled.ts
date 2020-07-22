import styled, { css } from 'styled-components'
import { CustomRow, CustomCol } from '../../styles/common.styled'

import {
  $white,
  $greyDark,
  $colorPrimary,
  $colorBorder,
} from '../../styles/variables'

interface StyledRowProps {
  open: boolean
}

export const StyledRow = styled(CustomRow)<StyledRowProps>`
  position: absolute;
  top: 5rem;
  left: 100%;
  padding: 0 2rem;
  width: 28rem;
  height: 100vh;
  background-color: ${$white};
  border-left: 0.1rem solid ${$colorBorder};
  transition: transform 0.3s ease-in-out;
  margin: 0 !important;

  transform: ${({ open }) => (open ? 'translateX(-100%)' : 'translateX(0)')};
  z-index: -1;
`

export const StyledCol = styled(CustomCol)`
  padding: 0 !important;
`
export const List = styled.ul`
  list-style: none;
`

export const menuItem = css`
  color: ${$greyDark};
  display: inline-block;
  font-size: 1.5rem;
  line-height: 3.8rem;
  padding: 1.3rem 1rem;
  text-decoration: none;
  transition: all 0.2s;
`
export const menuItemHover = css`
  color: ${$colorPrimary};
`

interface ListItemProps {
  href: string
}
export const ListItem = styled.li<ListItemProps>`
  text-align: left;
  margin: 0 auto;
  :not(:last-child) {
    border-bottom: ${({ href }) =>
      href ? `0.1rem solid ${$colorBorder}` : 'none'};
  }

  a:link,
  a:visited {
    ${menuItem};
  }

  a:hover,
  a:active {
    ${menuItemHover};
  }
`
