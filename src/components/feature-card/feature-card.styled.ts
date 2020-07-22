import styled from 'styled-components'
import { Link } from 'gatsby'

import { Paragraph } from '../../styles/common.styled'
import { $colorHeading, $colorText } from '../../styles/variables'
import media from '../../styles/media'

import Image from '../image'

export const StyledLink = styled(Link)`
  &:link,
  &:visited {
    text-decoration: none;
    transition: all 0.2s;
  }

  &:hover,
  &:active {
  }
`
export const StyledWrapper = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 42.5rem;
`
export const ImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 4rem;
  border-bottom: 0.1rem solid #3e4855;
  ${media.lessThan('sm')`
    margin-bottom: 1rem;
  `}
`

export const StyledImage = styled(Image)``

export const TextBlockWrapper = styled.div`
  ${media.lessThan('sm')`
    text-align: center;
  `}
`
export const Heading = styled.h3`
  font-size: 3.5rem;
  font-weight: normal;
  line-height: 4.7rem;
  color: ${$colorHeading};
  margin-bottom: 2rem;
  ${media.lessThan('lg')`
    font-size: 3.3rem;
  `}
  ${media.lessThan('mlg')`
    font-size: 3rem;
  `}
  ${media.lessThan('md')`
    font-size: 2.3rem;
  `}
  ${media.lessThan('sm')`
    margin-bottom: 0;
  `}

`
export const Text = styled(Paragraph)`
  font-size: 2.2rem;
  font-weight: normal;
  line-height: 3.7rem;
  letter-spacing: -0.01rem;
  color: ${$colorText};
  ${media.lessThan('lg')`
    font-size: 2.0rem;
    line-height: 3.4rem;
  `}
  ${media.lessThan('mlg')`
    font-size: 1.9rem;
    line-height: 3.3rem;
  `}
  ${media.lessThan('md')`
    font-size: 1.7rem;
    line-height: 2.8rem;
  `}
  ${media.lessThan('sm')`
    font-size: 1.5rem;
    line-height: 2.8rem;
    margin-bottom: 2rem;
  `}

`
