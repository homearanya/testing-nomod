import styled from 'styled-components'
import LocalisedLink from '../localised-link'

import { Paragraph } from '../../styles/common.styled'
import { $white } from '../../styles/variables'
import { absoluteCenter } from '../../styles/mixins'
import media from '../../styles/media'

import Image from '../image'

export const StyledWrapper = styled.article`
  position: relative;
  margin-bottom: 3rem;
  overflow: hidden;

  ${media.lessThan('sm')`
    width: 100%;
    margin: 0 auto 1rem auto;
  `}
`
export const StyledLink = styled(LocalisedLink)`
  &:link,
  &:visited {
    text-decoration: none;
    transition: transform 0.3s;
  }

  &:hover,
  &:active {
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
`

export const StyledImage = styled(Image)`
  transform: scale(1);
  transition: transform 0.3s;

  ${StyledLink}:hover &,
  ${StyledLink}:active & {
    transform: scale(1.1);
  }

  &::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0%;
    width: 100%;
    height: 100%;
    background-color: rgba(49, 53, 65, 0.2);
    z-index: 1;
  }
`

export const TextBlockWrapper = styled.div`
  width: 100%;
  text-align: center;
  ${absoluteCenter};
  z-index: 2;
`
export const Heading = styled.h3`
  font-weight: bold;
  font-size: 3.8rem;
  line-height: 2.8rem;
  letter-spacing: -0.01rem;
  margin-bottom: 2rem;
  color: ${$white};
  ${media.lessThan('sm')`
    font-size: 2.6rem;
  `}
`
export const Text = styled(Paragraph)`
  font-size: 2rem;
  line-height: 2.5rem;
  letter-spacing: -0.01rem;
  color: ${$white};
`
