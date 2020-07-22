import styled from 'styled-components'
import media from '../../styles/media'

export const StyledAnchor = styled.a`
  &:link,
  &:visited {
    svg {
      overflow: hidden;
      border-radius: 10rem;
    }
    ${media.lessThan('mlg')`
      svg {
        max-width: 16.5rem;
        margin: 0 auto;
      }
    `};
  }

  &:hover,
  &:active {
    svg {
      box-shadow: 0 0.2rem 1.5rem rgba(0, 0, 0, 0.1);
    }
  }
`
