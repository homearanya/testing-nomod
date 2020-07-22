import styled from 'styled-components'
import UniversalLink from '../universal-link'
import { $white, $colorPrimary } from '../../styles/variables'
import media from '../../styles/media'

export const StyledUniversalLink = styled(UniversalLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    font-size: 1.9rem;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 5.5rem;
    background-color: ${$white};
    color: ${$colorPrimary};
    border: 0.1rem solid #eeeff3;
    box-shadow: 0px 1rem 6rem rgba(0, 27, 123, 0.1);
    border-radius: 1rem;
    transition: all 0.2s;
    padding: 1.5rem 9.8rem;

    span {
      margin-left: 1rem;
      font-size: 2.5rem;
    }
    ${media.lessThan('md')`
      font-size: 1.4rem;
      padding: 1.5rem 5rem;
      span {
        font-size: 2.1rem;
      }
    `}
    ${media.lessThan('sm')`
      font-size: 1.1rem;
      padding: 0rem 5rem;
      span {
        font-size: 1.8rem;
      }
    `}
  }

  &:hover,
  &:active {
    box-shadow: 0px 1rem 6rem rgba(0, 27, 123, 0.2);
  }
`
