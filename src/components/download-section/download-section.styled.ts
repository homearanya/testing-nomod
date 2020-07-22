import styled, { css } from 'styled-components'
import StripeBadge from '../stripe-badge'
import TextBlock from '../text-block'
import Image from '../image'

import media from '../../styles/media'
import {
  CustomContainer,
  CustomRow,
  CustomCol,
} from '../../styles/common.styled'
import { $backgroundMain, $colorBorder } from '../../styles/variables'
import { relativeFlexUnit } from '../../styles/mixins'

interface StyledSectionProps {
  background?: string
}
export const StyledSection = styled.section<StyledSectionProps>`
  background: ${({ background }) =>
    background ? `${background}` : `${$backgroundMain}`};
`

export const StyledContainer = styled(CustomContainer)``
interface StyledRowProps {
  borderBottom?: boolean
  borderTop?: boolean
}
export const StyledRow = styled(CustomRow)<StyledRowProps>`
  margin: 0 !important;
  border-bottom: ${({ borderBottom }) =>
    borderBottom ? `0.1rem solid ${$colorBorder}` : 'none'};
  border-top: ${({ borderTop }) =>
    borderTop ? `0.1rem solid ${$colorBorder}` : 'none'};
`
export const StyledCol = styled(CustomCol)`
  position: relative;
`
export const StyledStripeBadge = styled(StripeBadge)``

interface StyledTextBlockProps {
  windowWidth: number | undefined
}

export const StyledTextBlock = styled(TextBlock)<StyledTextBlockProps>`
  ${({ windowWidth }) =>
    windowWidth &&
    css`
      ${relativeFlexUnit(windowWidth, 1366, 1920, 0, 180, 'padding-left')}
    `}
  .heading {
    margin-bottom: 7.9rem;
  }

  padding-top: 15.7rem;
  padding-bottom: 14.5rem;
  ${media.lessThan('lg')`
    padding-bottom: 13.6rem;
    .heading {
      margin-bottom: 7.4rem;
    }
  `};
  ${media.lessThan('mlg')`
    padding-top: 11.7rem;
    padding-bottom: 10.9rem;
    .heading {
      margin-bottom: 5.9rem;
    }
  `};
  ${media.lessThan('md')`
    padding-top: 8.8rem;
    padding-bottom: 8.1rem;
    .heading {
      margin-bottom: 4.5rem;
    }
  `};
  ${media.between('sm', 'md')`
    margin-right: -5rem;
  `};

  ${media.lessThan('sm')`
    padding-top: 5rem;
    padding-bottom: 0;
    margin-bottom: 1rem;
    text-align: center;
    .heading {
      margin-bottom: 2.8rem;
    }
    .badges {
      justify-content: center;
    }
  `};
`

export const ImageWrapper = styled.div`
  margin-left: -3rem;
  width: 100%;
  position: absolute;
  bottom: 0;
  ${media.lessThan('lg')`
    margin-left: 0rem;
  `};
  ${media.lessThan('sm')`
    position: static;
  `};
`
export const StyledImage = styled(Image)`
  max-width: 43rem !important;
  ${media.lessThan('lg')`
    margin-left: auto !important;
    margin-right: 0 !important;
`}
  ${media.lessThan('mlg')`
    max-width: 34rem!important;
  `};
  ${media.lessThan('md')`
    max-width: 28rem!important;
  `};
  ${media.lessThan('sm')`
    margin-right: auto !important;
`}
`
