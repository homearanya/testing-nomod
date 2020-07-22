import styled from 'styled-components'
import { $green, $greenHover, $white } from '../../styles/variables'
import media from '../../styles/media'

export const Button = styled.button`
  &&& {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: ${$green} none repeat scroll 0 0;
    color: ${$white};
    cursor: pointer;
    font: inherit;
    appearance: none;
    outline: 0;
    padding: 1.2rem 2rem;
    text-transform: uppercase;
    display: block;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2rem;
    text-align: center;
    border-radius: 0.9rem;
    transition: 0.2s all;

    :hover {
      background-color: ${$greenHover};
      color: ${$white};
    }
    ${media.lessThan('md')`
      padding: 0.7rem 1.5rem;
      font-size:1.2rem;
  `}
    ${media.lessThan('sm')`
      padding: 0.5rem 1.2rem;
      font-size: 1rem;
    `}
  }
`
