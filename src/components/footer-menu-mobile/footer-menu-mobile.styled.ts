import styled from 'styled-components'
import media from '../../styles/media'

export const Wrapper = styled.div`
  display: none;

  ${media.lessThan('sm')`
    display:block;
    padding-top: 2rem;
  `}
`

export const TabWrapper = styled.div``
