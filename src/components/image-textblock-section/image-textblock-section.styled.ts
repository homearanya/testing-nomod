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
import { $backgroundMain, $greyRegularDark } from '../../styles/variables'
import { absoluteCenter } from '../../styles/mixins'

export const StyledSection = styled.section``
export const StyledContainer = styled(CustomContainer)``

export const StyledRow = styled(CustomRow)`
  margin: 0 !important;
`
export const StyledCol = styled(CustomCol)`
  position: relative;
  height: inherit;
`
export const StyledStripeBadge = styled(StripeBadge)``

interface StyledTextBlockProps {
  marginTop: boolean
  marginBottom: boolean
  textPosition: string
}
export const StyledTextBlock = styled(TextBlock)<StyledTextBlockProps>`
  position: relative;
  max-width: 61rem;
  padding: 5rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${({ marginTop }) => (marginTop ? '27rem' : '0')};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? '7rem' : '0')};

  ${({ marginTop, marginBottom, textPosition }) => css`
    ${media.lessThan('xl')`
      margin-top: ${marginTop ? '17rem' : '0'};
      margin-bottom: ${marginBottom ? '5rem' : '0'};
    `}
    ${media.lessThan('mlg')`
      margin-top: ${marginTop ? '8rem' : '0'};
      margin-bottom: ${marginBottom ? '0' : '0'};
    `}
    ${media.lessThan('md')`
      margin-top: ${marginTop ? '8rem' : '0'};
      margin-bottom: ${marginBottom ? '0' : '0'};
      padding:3rem;
      padding-left: ${textPosition === 'left' ? '3rem' : '1rem'};
      padding-right: ${textPosition === 'left' ? '1rem' : '3rem'};
    `}
    ${media.lessThan('sm')`
      margin-top: 7rem;
      margin-bottom: 0rem;
      padding:3rem;
    `}
  `}

  .text {
    font-size: 2.2rem;
    line-height: 4.2rem;
    letter-spacing: -0.01rem;
    color: ${$greyRegularDark};

    ${media.lessThan('mlg')`
      font-size: 2rem;
    `}
    ${media.lessThan('md')`
      line-height: 3.4rem;  
      font-size: 1.7rem;
    `}
    ${media.lessThan('sm')`
      line-height: 3rem;  
      font-size: 1.5rem;
    `}

    strong {
      font-weight: 500;
    }
  }
  .text.last {
    margin-bottom: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    ${({ textPosition }) =>
      textPosition === 'left'
        ? css`
            left: 0;
          `
        : css`
            right: 0;
          `}
    right: 0;
    width: 80%;
    height: 100%;
    background-color: ${$backgroundMain};
    border-radius: 2rem;
    z-index: -1;
    ${media.lessThan('sm')`
      width: 100%;
    `};
  }
`

interface ImageWrapperProps {
  marginTop: boolean
  marginBottom: boolean
}
export const ImageWrapper = styled.div<ImageWrapperProps>`
  width: 100%;
  max-width: 46rem;
  ${absoluteCenter};
  margin-top: ${({ marginTop }) => (marginTop ? '10rem' : '0')};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? '10rem' : '0')};

  ${media.lessThan('mlg')`
    max-width: 40rem;
  `};
  ${media.lessThan('md')`
    max-width: 30rem;
  `};

  ${media.lessThan('sm')`
    position: static;
    margin: 0;
    margin-top: 4rem;
    transform:none;
    top: unset;
    left:unset;
  `};
`

interface StyledImageProps {
  textPosition: string
}
export const StyledImage = styled(Image)<StyledImageProps>``
