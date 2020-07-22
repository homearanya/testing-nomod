import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import LocalisedLink from '../localised-link'

import {
  $white,
  $greyDark,
  $colorPrimary,
  $colorBorder,
} from '../../styles/variables'

import media from '../../styles/media'

interface StyledNavigationProps {
  open?: boolean
}
export const StyledNavigation = styled.header<StyledNavigationProps>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${$white};
  z-index: 1000;
  transition: all 0.2s;
  height: 9rem;
  border-bottom: ${({ open }) =>
    open ? `0.1rem solid ${$colorBorder}` : `0.1rem solid transparent`};

  &.scrolled {
    height: 7rem;
    border-bottom: 0.1rem solid ${$colorBorder};
    ${media.lessThan('md')`
      height: 5rem;
    `};
  }

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${$white};
    z-index: 0;
  }

  ${media.lessThan('md')`
    height: 7rem;
  `};
  ${media.lessThan('md')`
    height: 5rem;
  `};
`

export const Nav = styled.nav`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Euclid Square', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
`
export const Logo = styled(LocalisedLink)`
  img {
    display: block !important;
    width: 13rem;
    ${media.lessThan('sm')`
    width: 9rem;
  `};
  }
`

export const List = styled.ul`
  list-style: none;
  display: flex;
`

export const menuItem = css`
  color: ${$greyDark};
  display: inline-block;
  font-size: 1.7rem;
  line-height: 7.5rem;
  font-weight: 500;
  padding: 1.2rem 2.8rem;
  text-decoration: none;
  transition: all 0.2s;
`
export const menuItemHover = css`
  color: ${$colorPrimary};
`
export const ListItem = styled.li`
  a:link,
  a:visited {
    ${menuItem};
  }

  a:hover,
  a:active {
    ${menuItemHover};
  }

  ${media.lessThan('md')`
    display: none;
  `};
`

interface BackgroundProps {
  open: boolean
}
export const Background = styled.div<BackgroundProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: ${({ open }) => (open ? '1' : '0')};
  background-color: ${rgba($white, 0.6)};
  z-index: ${({ open }) => (open ? '999' : '-999')};
  transition: opacity 0.3s linear;
`
