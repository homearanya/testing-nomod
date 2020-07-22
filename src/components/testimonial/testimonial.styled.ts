import styled from 'styled-components'

import media from '../../styles/media'
import { MainHeading, Paragraph } from '../../styles/common.styled'
import { $colorPrimary, $yellow, $colorText } from '../../styles/variables'

import Image from '../image'
import UniversalLink from '../universal-link'

interface WrapperProps {
  active?: boolean
  maxWidth: number
}

export const Wrapper = styled.article<WrapperProps>`
  width: 100%;
  max-width: ${({ maxWidth }) => `calc(${maxWidth}% - 3.2rem)`};
  padding: 3.5rem 6.6rem;
  background: #ffffff;
  box-shadow: ${({ active }) =>
    active
      ? '0px 1rem 5rem rgba(0, 0, 0, 0.15)'
      : '0px 1rem 5rem rgba(0, 0, 0, 0.0)'};
  border-radius: 1rem;
  margin: 0 3.2rem;
  text-align: center;
  transition: box-shadow 0.3s;
  ${({ maxWidth }) =>
    media.lessThan('lg')`
      margin: 0 3rem;
      max-width: ${`calc(${maxWidth}% - 3rem)`};
    `}

  ${media.lessThan('mlg')`
    padding: 3rem 3.5rem;
  `};
  ${media.lessThan('md')`
    padding: 2.3rem 2.6rem;
  `};

  ${({ maxWidth }) =>
    media.lessThan('lg')`
      padding: 1.6rem 2.3rem;
      margin: 0 1rem;
      max-width: ${`calc(${maxWidth}% - 1rem)`};
    `}
  ${({ maxWidth }) =>
    media.lessThan('sm')`
      padding: 1.6rem 2.3rem;
      margin: 0 0.5rem;
      max-width: ${`calc(${maxWidth}% - 0.5rem)`};
    `}
`

export const RatingWrapper = styled.div`
  font-size: 2.3rem;
  margin-bottom: 1.5rem;
  .react-rater {
    text-align: center;
  }
  .react-rater-star {
    font-size: 3rem;

    ${media.lessThan('mlg')`
      font-size: 2.5rem;
    `};

    ${media.lessThan('md')`
      font-size: 1.9rem;
    `};
  }
  .react-rater-star.is-active {
    color: ${$yellow};
  }
  .react-rater-star.is-active-half::before {
    color: ${$yellow};
  }

  ${media.lessThan('mlg')`
    font-size: 1.7rem;
    margin-bottom: 1.3rem;
  `};
  ${media.lessThan('md')`
    font-size: 1.4rem;
    margin-bottom: 0.9rem;
  `};
  ${media.lessThan('sm')`
    margin: 0 ;
    margin-bottom: 1rem;
  `};
`
export const Heading = styled(MainHeading)`
  font-size: 2.6rem !important;
  line-height: 3.3rem !important;
  text-align: center;
  color: #000000;
  margin-bottom: 1.5rem;
  ${media.lessThan('md')`
    font-size: 2.1rem !important;
  `};
  ${media.lessThan('sm')`
    font-size: 1.7rem !important;
    line-height: 2.9rem !important;
  `};
`
export const Text = styled(Paragraph)`
  font-size: 1.8rem;
  line-height: 2.8rem;
  text-align: center;
  letter-spacing: -0.01rem;
  color: #5e6478;
  margin-bottom: 2.7rem;
  ${media.lessThan('mlg')`
    font-size: 1.5rem;
    line-height: 2.3rem;
  `};
  ${media.lessThan('md')`
    font-size: 1.4rem;
  `};
  ${media.lessThan('sm')`
    font-size: 1.2rem;
    line-height: 1.9rem;
  `};
`
export const StyledLink = styled(UniversalLink)`
  display: flex;
  align-items: center;
  color: ${$colorPrimary};
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 3.7rem;
  letter-spacing: -0.01rem;
  text-transform: uppercase;

  span {
    margin-left: 1rem;
    font-size: 2.5rem;
  }
`
export const PersonWrapper = styled.div`
  position: relative;
  width: 100%;
`
export const StyledImage = styled(Image)`
  width: 6.8rem;
  height: 6.8rem;
  border-radius: 50%;
  overflow: hidden;
  ${media.lessThan('mlg')`
    width: 5.6rem;
    height: 5.6rem;
  `};
  ${media.lessThan('md')`
    width: 4.3rem;
    height: 4.3rem;
  `};
  ${media.lessThan('sm')`
    width: 4.3rem;
    height: 4.3rem;
  `};
`
export const PersonTitle = styled.p`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 3rem;
  text-align: center;
  color: ${$colorText};

  span {
    margin-left: 0.5rem;
    font-weight: 400;
  }

  ${media.lessThan('mlg')`
    font-size: 1.5rem;
  `};
  ${media.lessThan('md')`
    font-size: 1.4rem;
  `};
  ${media.lessThan('sm')`
    font-size: 1.2rem;
  `};
`
