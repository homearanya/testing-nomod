import styled, { css } from 'styled-components'

import { $greyDark, $colorPrimary } from '../../styles/variables'

import media from '../../styles/media'

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
