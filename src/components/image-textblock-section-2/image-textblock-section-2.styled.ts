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
import { $colorHeading, $colorText, $colorBorder } from '../../styles/variables'

interface StyledSectionProps {
  paddingTop: boolean
  paddingBottom: boolean
}

export const StyledSection = styled.section<StyledSectionProps>`
  padding-top: ${({ paddingTop }) => (paddingTop ? '10rem' : '0')};
  padding-bottom: ${({ paddingBottom }) => (paddingBottom ? '10rem' : '0')};

  ${({ paddingTop, paddingBottom }) => css`
    ${media.lessThan('xl')`
      padding-top: ${paddingTop ? '10rem' : '0'};
      padding-bottom: ${paddingBottom ? '10rem' : '0'};
    `}
    ${media.lessThan('mlg')`
      padding-top: ${paddingTop ? '6rem' : '0'};
      padding-bottom: ${paddingBottom ? '0' : '0'};
    `}
    ${media.lessThan('md')`
      padding-top: ${paddingTop ? '8rem' : '0'};
      padding-bottom: ${paddingBottom ? '0' : '0'};
    `}
    ${media.lessThan('sm')`
      padding-top: 0rem;
      padding-bottom: 0rem;
    `}
  `}
`
export const StyledContainer = styled(CustomContainer)``

export const StyledRow = styled(CustomRow)`
  ${media.lessThan('sm')`
    flex-direction:column-reverse;
    ${StyledSection}:not(:last-child) & {
      border-bottom: 1px solid ${$colorBorder};
    }
  `}
`
export const StyledCol = styled(CustomCol)`
  width: 100%;
`
export const StyledStripeBadge = styled(StripeBadge)``

interface StyledTextBlockProps {
  textPosition: string
}
export const StyledTextBlock = styled(TextBlock)<StyledTextBlockProps>`
  position: relative;
  max-width: 36rem;
  margin-left: 0;
  margin-right: auto;

  ${media.lessThan('md')`
    max-width: 30rem;
  `}

  ${media.lessThan('sm')`
    margin: 0;
    text-align:center;
  `}

  .icon {
    ${media.lessThan('mlg')`
      width: 5rem;
      height: 5rem;
    `}
    ${media.lessThan('sm')`
      width: 4rem;
      height: 4rem;
      margin-bottom: 0;
    `}
  }

  .heading {
    font-size: 3.5rem;
    font-weight: normal;
    line-height: 5.5rem;
    color: ${$colorHeading};
    margin-bottom: 2rem;

    ${media.lessThan('md')`
      font-size: 2.3rem;
       margin-bottom: 0;
    `}
    ${media.lessThan('sm')`
      font-size: 2rem;
    `}
  }

  .text {
    font-size: 1.8rem;
    line-height: 2.8rem;
    letter-spacing: -0.01rem;
    color: ${$colorText};

    ${media.lessThan('md')`
      line-height: 2.4rem;  
      font-size: 1.5rem;
    `}
    ${media.lessThan('sm')`
      line-height: 2.2rem;  
      font-size: 1.3rem;
    `}

    strong {
      font-weight: 500;
    }
  }
  .text.last {
    margin-bottom: 0;
    ${media.lessThan('sm')`
      margin-bottom: 3rem;
    `}
  }
`
interface ImageWrapperProps {
  textPosition: string
}
export const ImageWrapper = styled.div<ImageWrapperProps>`
  width: 100%;
  ${({ textPosition }) => css`
    margin-left: ${textPosition === 'right'
      ? '0 !important'
      : '-16rem !important'};
    ${media.lessThan('md')`
      margin-left: ${
        textPosition === 'right' ? '0 !important' : '-8rem !important'
      };
    `}
  `}
  ${media.lessThan('sm')`
    margin: 0!important;
  `}
`

interface StyledImageProps {
  textPosition: string
}
export const StyledImage = styled(Image)<StyledImageProps>`
  margin-right: ${({ textPosition }) =>
    textPosition === 'right' ? '0 !important' : 'auto !important'};
  margin-left: ${({ textPosition }) =>
    textPosition === 'right' ? 'auto !important' : '0 !important'};
  ${media.lessThan('md')`
    max-width: 50rem;
    margin: 0 auto !important;
  `}
`
