import styled from 'styled-components'

import {
  CustomContainer,
  CustomRow,
  CustomCol,
} from '../../styles/common.styled'
import StripeBadge from '../stripe-badge'
import TextBlock from '../text-block'
import Button from '../button'
import media from '../../styles/media'

interface StyledSectionProps {
  paddingBottom?: boolean
  paddingTop?: boolean
}
export const StyledSection = styled.section<StyledSectionProps>`
  padding-bottom: ${({ paddingBottom }) => (paddingBottom ? '7rem' : '0')};
  padding-top: ${({ paddingTop }) => (paddingTop ? '7rem' : '0')};
  ${({ paddingBottom, paddingTop }) => media.lessThan('mlg')`
    padding-bottom: ${paddingBottom ? '5rem' : '0'};
    padding-top: ${paddingTop ? '5rem' : '0'};
  `};
  ${({ paddingBottom, paddingTop }) => media.lessThan('sm')`
    padding-bottom: ${paddingBottom ? '4rem' : '0'};
    padding-top: ${paddingTop ? '5rem' : '0'};
  `};
`
export const StyledContainer = styled(CustomContainer)`
  max-width: 156.3rem;
  margin: 0 auto;
`
export const StyledRow = styled(CustomRow)``

export const StyledCol = styled(CustomCol)`
  height: 100%;
`
export const StyledStripeBadge = styled(StripeBadge)``
export const StyledTextBlock = styled(TextBlock)`
  .heading {
    margin-bottom: 3rem;
  }
  .text {
    margin-bottom: 6rem;
    ${media.lessThan('mlg')`
      margin-bottom: 4rem;
    `};
  }

  ${media.lessThan('xl')`
    max-width: 100rem;
  `};
  &.last {
    margin-bottom: 4rem;
  }

  ${media.lessThan('mlg')`
    .heading {
      margin-bottom: 3rem;
    }
    .text {
      margin-bottom: 4rem;
    }
    &.last {
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
    &.last {
     margin-bottom: 3rem;
    }
  `};
  ${media.lessThan('sm')`
    .heading {
      margin-bottom: 2rem;
    }
    .text {
      margin-bottom: 2rem;
    }
    &.last {
     margin-bottom: 2rem;
    }
  `};
`
export const StyledButton = styled(Button)`
  margin-top: 6rem;
  ${media.lessThan('mlg')`
    margin-top: 5rem;
  `};
  ${media.lessThan('md')`
    margin-top: 4rem;
  `};
`
