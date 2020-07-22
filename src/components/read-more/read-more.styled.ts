import styled from 'styled-components'
import UniversalLink from '../universal-link/universal-link'
import { $colorPrimary, $colorHeading } from '../../styles/variables'
import media from '../../styles/media'

export const StyledUniversalLink = styled(UniversalLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: ${$colorPrimary};
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 3.7rem;
    letter-spacing: -0.01rem;

    span {
      margin-left: 1rem;
      font-size: 2.5rem;
    }

    ${media.lessThan('mlg')`
    font-size: 1.3rem;
    span {
      font-size: 2.3rem;
    }
  `};
  }

  &:hover,
  &:active {
    color: ${$colorHeading};
  }
`
