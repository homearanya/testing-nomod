import styled from 'styled-components'

import {
  CustomContainer,
  CustomRow,
  CustomCol,
} from '../../styles/common.styled'
import StripeBadge from '../stripe-badge'
import TextBlock from '../text-block'
import media from '../../styles/media'

export const StyledContainer = styled(CustomContainer)`
  max-width: 156.3rem;
  margin: 0 auto;
  .text-block .text {
    max-width: 90%;
  }
`
export const StyledRow = styled(CustomRow)``

export const StyledCol = styled(CustomCol)`
  height: 100%;
`
export const StyledStripeBadge = styled(StripeBadge)``
export const StyledTextBlock = styled(TextBlock)`
  .heading {
    margin-bottom: 4rem;
    ${media.lessThan('md')`
      font-size:2.7rem;
      line-height:3.3rem;
    `};
  }
  .text {
    font-size: 2rem;
    line-height: 3rem;
    letter-spacing: -0.01rem;
    margin-bottom: 6rem;
    ${media.lessThan('mlg')`
      margin-bottom: 4rem;
    `};
    ${media.lessThan('md')`
      font-size:1.7rem;
    `};
    ${media.lessThan('sm')`
      font-size: 1.4rem;
      line-height: 2.8rem;
    `};
  }

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
