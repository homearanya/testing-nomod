import styled from 'styled-components'

import { Paragraph } from '../../styles/common.styled'
import { $backgroundMain } from '../../styles/variables'
import media from '../../styles/media'

import Image from '../image'

export const StyledWrapper = styled.article`
  position: relative;
  max-width: 46.5rem;
  width: 100%;
  background-color: ${$backgroundMain};
  padding: 11rem 4rem 5rem;
  margin-top: 6rem;

  ${media.lessThan('sm')`
    padding: 7rem 2rem 3rem;
    text-align: center;
  `}
`

export const TextBlockWrapper = styled.div`
  ${media.lessThan('sm')`
    text-align: center;
  `}
`

export const TagNumber = styled(Paragraph)`
  font-weight: 500;
  font-size: 2rem;
  line-height: 4.7rem;
`

export const ImageWrapper = styled.div`
  position: absolute;
  top: -4rem;
  left: 4rem;
  ${media.lessThan('sm')`
    margin-bottom: 1rem;
  `}
`

export const StyledImage = styled(Image)`
  ${media.lessThan('sm')`
    max-height: 8rem;
    max-width: 8rem;
  `}
`
