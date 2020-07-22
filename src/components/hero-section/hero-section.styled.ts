import styled from 'styled-components'

import {
  CustomContainer,
  CustomRow,
  CustomCol,
} from '../../styles/common.styled'

import StripeBadge from '../stripe-badge'
import TextBlock from '../text-block'
import Image from '../image'
import { $colorBorder } from '../../styles/variables'
import { heroTextAnimation } from '../../styles/mixins'
import media from '../../styles/media'

export const StyledSection = styled.section`
  padding: 6rem 0 7rem;
  ${media.lessThan('mlg')`
    padding: 4rem 0 5rem;
  `};
  ${media.lessThan('sm')`
    padding: 3rem 0 4rem;
  `};

  ${heroTextAnimation};
`

export const StyledContainer = styled(CustomContainer)`
  max-width: 136.6rem;
  margin: 0 auto;
  ${media.lessThan('sm')`
    padding: 0 1.5rem;
  `};
`
export const StyledRow = styled(CustomRow)``
export const StyledCol = styled(CustomCol)``
export const StyledStripeBadge = styled(StripeBadge)`
  margin-bottom: 2rem;
`
export const StyledTextBlock = styled(TextBlock)`
  .heading {
    margin-bottom: 3rem;
  }
  .text {
    margin-bottom: 5rem;
  }
  ${media.lessThan('mlg')`
    .heading {
      margin-bottom: 3rem;
    }
    .text {
      margin-bottom: 4rem;
    }
  `};
  ${media.lessThan('md')`
    .heading {
      margin-bottom: 3rem;
    }
    .text {
      margin-bottom: 3rem;
    }
  `};
  ${media.lessThan('sm')`
    .heading {
      margin-bottom: 2rem;
    }
    .text {
      margin-bottom: 3rem;
    }
  `};
`

interface ImageWrapperProps {
  borderBottom?: boolean
}
export const ImageWrapper = styled.div<ImageWrapperProps>`
  border-bottom: ${({ borderBottom }) =>
    borderBottom ? `0.1rem solid ${$colorBorder}` : 'none'};
  width: 100%;
  margin-top: 7rem;
`
export const StyledImage = styled(Image)`
  max-width: 66.5rem !important;
`
