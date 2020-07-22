import styled from 'styled-components'
import { CustomRow, CustomCol } from '../../styles/common.styled'

import { MainHeading, Paragraph } from '../../styles/common.styled'
import media from '../../styles/media'

import Image from '../image'
import ReadMore from '../read-more'

export const StyledRow = styled(CustomRow)`
  margin: 0 !important;
  flex-direction: row-reverse;
  ${media.lessThan('sm')`
    flex-direction: row;
  `};
`
export const StyledCol = styled(CustomCol)`
  &:first-child {
    padding-left: 0;
    ${media.greaterThan('xl')`
      padding: 0 9rem;
    `};
  }
  &:last-child {
    padding-right: 0;
  }
  ${media.lessThan('sm')`
    align-items: center;
    text-align: center;
    padding-left: 0;
  `};
`
export const Heading = styled(MainHeading)`
  max-width: 50rem;
  margin-left: 0 !important;
  margin-bottom: 6rem;

  ${media.lessThan('xl')`
    margin-bottom: 12rem;
  `};
  ${media.lessThan('lg')`
    margin-bottom: 10rem;
  `};
  ${media.lessThan('mlg')`
    margin-bottom: 8rem;
  `};
  ${media.lessThan('md')`
    margin-bottom: 6rem;
  `};
  ${media.lessThan('sm')`
    margin-bottom: 4rem;
  `};
`
export const Text = styled(Paragraph)`
  margin-bottom: 6rem;
  ${media.lessThan('xl')`
    margin-bottom: 3rem;
  `};
  ${media.lessThan('lg')`
    margin-bottom: 2rem;
  `};
  ${media.lessThan('sm')`
    margin-bottom: 1rem;
  `};
`
export const StyledReadMore = styled(ReadMore)`
  span {
  }
`
export const ImageWrapper = styled.div`
  position: relative;
  margin-left: auto !important;
  margin-right: 0 !important;
  width: 100%;
  ${media.lessThan('xl')`
    width: 80%;
  `};
  ${media.lessThan('sm')`
    max-width: 500rem;
    margin-right: auto !important;
    margin-bottom: 4rem;
  `};
`
export const StyledImage = styled(Image)`
  margin-left: auto !important;
  margin-right: 0 !important;
  ${media.lessThan('xl')`
    & > div {
      padding-bottom: ${100 / 0.8}% !important;
    }
  `};
  ${media.lessThan('sm')`
    margin-right: auto !important;
    left:5rem;
  `};
`
export const StyledCard = styled(Image)`
  position: absolute !important;
  left: 0;
  bottom: 0;
  transform: translateX(-25%);
  width: 100%;
  max-width: 36rem !important;
  height: auto;
  ${media.lessThan('sm')`
    transform: none;
    left: -3rem;
  `};
`
