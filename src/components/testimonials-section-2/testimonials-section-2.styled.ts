import styled from 'styled-components'
import { CustomContainer, CustomRow } from '../../styles/common.styled'
import Testimonial2 from '../testimonial-2'

import { $backgroundMain } from '../../styles/variables'
import media from '../../styles/media'
import { flexUnit, toVW } from '../../styles/mixins'

export const StyledSection = styled.section`
  overflow: hidden;
  background-color: ${$backgroundMain};
  padding: 10rem 0 9rem;
  ${media.lessThan('mlg')`
    padding: 5rem 0;
  `};
  ${media.lessThan('sm')`
    padding: 4rem 0;
  `};
`

interface StyledContainerProps {
  containerWidth: number
  firstMarginLeft: number
}
export const StyledContainer = styled(CustomContainer)<StyledContainerProps>`
  width: ${({ containerWidth, firstMarginLeft }) =>
    `${(containerWidth + firstMarginLeft) / 10}rem`} !important;
  max-width: unset;
  overflow: hidden;
  margin-left: ${({ containerWidth }) =>
    `calc((100 vw - ${containerWidth / 10}rem)/2)`};
`

interface StyledRowProps {
  firstMarginLeft: number
}

export const StyledRow = styled(CustomRow)<StyledRowProps>`
  position: relative;
  ${({ firstMarginLeft }) =>
    `${flexUnit(
      toVW(firstMarginLeft, 1920),
      0,
      firstMarginLeft,
      'vw',
      'margin-left',
    )}`};

  ${media.lessThan('lg')`
    margin-left: 0 !important;
  `};

  & > :first-child {
    margin-left: ${({ firstMarginLeft }) =>
      `-${firstMarginLeft / 10}rem`}!important;
  }
`

export const StyledTestimonial = styled(Testimonial2)`
  flex: 1 0 auto;
`
