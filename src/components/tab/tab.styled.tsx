import styled, { css } from 'styled-components'

import {
  $greyDarkExtra,
  $greyRegularDark,
  $colorBorder,
  $colorPrimary,
  $white,
} from '../../styles/variables'
import { H6 } from '../../styles/common.styled'

import ArrowDown from '../../images/arrow-down.inline.svg'
import Tag from '../tag'

interface TabWrapperProps {
  zIndex?
}
export const TabWrapper = styled.div<TabWrapperProps>`
  background-color: ${$white};
  z-index: ${({ zIndex }) => (zIndex ? `${zIndex}` : `0`)};
`

export const HeadingWrapper = styled.div``

export const MenuHeading = styled(H6)`
  color: ${$greyDarkExtra};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
  line-height: 5.5rem;
  text-transform: uppercase;
  &.hoverable:hover {
    cursor: pointer;
    color: ${$colorPrimary};
  }
`

interface StyledArrowDownProps {
  active?: boolean
}
export const StyledArrowDown = styled(ArrowDown)<StyledArrowDownProps>`
  ${MenuHeading}:link &,
  ${MenuHeading}:visited & {
    fill: #9096a3;
  }
  width: 1.2rem;
  height: auto;
  margin-right: 1rem;
  transition: all 0.3s;

  transform: ${({ active }) => (active ? 'rotateX(180deg)' : 'rotateX(0)')};

  ${MenuHeading}.hoverable:hover &,
  ${MenuHeading}.hoverable:active & {
    fill: ${$colorPrimary};
  }
`

const menuItem = css`
  font-size: 1.2rem;
  line-height: 3.2rem;
`

export const List = styled.ul`
  background-color: ${$white};
  list-style: none;
`

interface ListItemProps {
  readonly active?: boolean
}
export const ListItem = styled.li<ListItemProps>`
  height: ${({ active }) => (active ? 'auto' : '0')};
  display: flex;
  align-items: center;
  :last-child {
    padding-bottom: 2rem;
  }
  a:link,
  a:visited {
    display: inline-block;
    color: ${$greyRegularDark};
    ${menuItem};
    text-decoration: none;
    transition: all 0.2s;
    white-space: nowrap;
  }

  a:hover,
  a:active {
    color: ${$colorPrimary};
  }
  p {
    ${menuItem};
  }
`

export const Separator = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: ${$colorBorder};
`
export const StyledTag = styled(Tag)`
  margin-left: 1rem;
`
