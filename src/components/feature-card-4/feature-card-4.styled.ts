import styled, { css } from 'styled-components'

import { Paragraph, CustomRow } from '../../styles/common.styled'
import {
  $backgroundMain,
  $colorHeading,
  $colorText,
} from '../../styles/variables'
import media from '../../styles/media'

import Image from '../image'

interface StyledRowProps {
  textLeft?: boolean
}
export const StyledRow = styled(CustomRow)<StyledRowProps>`
  position: relative;
  justify-content: ${({ textLeft }) => (textLeft ? 'flex-start' : 'flex-end')};
  width: 100%;
  margin-bottom: 8rem;
  ${media.lessThan('mlg')`
    margin-bottom: 4.7rem;
  `}
  ${media.lessThan('md')`
    margin-bottom: 3.5rem;
  `}
`

export const TextBlockWrapper = styled.div<StyledRowProps>`
  max-width: 102.7rem;
  background-color: ${$backgroundMain};
  ${({ textLeft }) =>
    textLeft
      ? css`
          padding: 10rem 36rem 10rem 10.4rem;
          ${media.lessThan('lg')`
            padding: 10rem 45rem 10rem 7rem;
          `}
          ${media.lessThan('mlg')`
            padding: 8rem 30rem 8rem 6rem;
          `}
          ${media.lessThan('md')`
            padding: 5rem 22rem 5rem 4.5rem;
          `}
        `
      : css`
          padding: 10rem 6rem 10rem 36rem;
          ${media.lessThan('lg')`
            padding: 10rem 6rem 10rem 42.2rem;
          `}
          ${media.lessThan('mlg')`
            padding: 8rem 4.5rem 8rem 35rem;
          `}
          ${media.lessThan('md')`
            padding: 5rem 3.5rem 5rem 25rem;
          `}
        `};

  ${media.lessThan('mlg')`
    max-width: 92%;
  `};
  ${media.lessThan('sm')`
    max-width: 100%;
    width: 100%;
    padding: 3rem 2rem 2rem 2rem;
    text-align: center;
  `};
`

export const TagNumber = styled(Paragraph)`
  font-weight: 500;
  font-size: 2rem;
  line-height: 4.7rem;
`

export const ImageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
  ${media.lessThan('sm')`
    position: static;
    top: unset;
    left: unset;
    transform: none;
  `};
`

export const StyledImage = styled(Image)<StyledRowProps>`
  margin: 0 !important;
  ${({ textLeft }) =>
    textLeft
      ? css`
          margin-left: auto !important;
        `
      : css`
          margin-right: auto !important;
        `};

  ${media.lessThan('mlg')`
    max-width: 36.4rem !important;
  `}
  ${media.lessThan('md')`
    max-width: 26.7rem !important;
  `}
  ${media.lessThan('sm')`
    margin-left: auto !important;
    margin-right: auto !important;
  `}
`

export const Heading = styled.h3`
  font-size: 4.5rem;
  font-weight: normal;
  line-height: 5.5rem;
  color: ${$colorHeading};
  margin-bottom: 1.5rem;
  ${media.lessThan('mlg')`
    font-size: 3.5rem;
  `}
  ${media.lessThan('md')`
    font-size: 2.5rem;
    margin-bottom: 0;
  `}
  ${media.lessThan('sm')`
    font-size: 2.3rem;
    line-height: 3.6rem;
    margin-bottom: 1.5rem;
  `}

`
export const Text = styled(Paragraph)`
  font-size: 2.2rem;
  font-weight: normal;
  line-height: 3.2rem;
  letter-spacing: -0.01rem;
  color: ${$colorText};
  ${media.lessThan('mlg')`
    font-size: 1.8rem;
  `}
  ${media.lessThan('md')`
    font-size: 1.6rem;
    line-height: 2.6rem;
  `}
  ${media.lessThan('sm')`
    max-width: 50rem;
    font-size: 1.4rem;
    line-height: 2.3rem;
    margin: 0 auto 3rem auto;
  `}

`
