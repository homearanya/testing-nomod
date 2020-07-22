import styled from 'styled-components'

import UniversalLink from '../universal-link'
import { $colorHeading, $colorText } from '../../styles/variables'
export const Wrapper = styled.aside``
export const List = styled.ul`
  list-style: none;
`
export const ListItem = styled.li`
  margin-bottom: 1rem;
`
export const StyledLink = styled(UniversalLink)`
  &:link,
  &:visited {
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 3.9rem;
    letter-spacing: -0.01rem;
    color: ${$colorText};
    text-decoration: none;
    transition: all 0.2s;
  }

  &.active {
    color: ${$colorHeading};
  }

  &:hover,
  &:active {
    color: ${$colorHeading};
  }
`
