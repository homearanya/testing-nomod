import styled from 'styled-components'

import { Paragraph } from '../../styles/common.styled'
import { $yellow, $colorText, $colorHeading } from '../../styles/variables'
import { flexUnit, toVW } from '../../styles/mixins'
import media from '../../styles/media'

import Image from '../image'
interface WrapperProps {
  readonly cardMaxWidth: number
  readonly gutterWidth: number
}

export const Wrapper = styled.article<WrapperProps>`
  max-width: ${({ cardMaxWidth }) => `${cardMaxWidth / 10}rem`};
  padding: 2rem 3rem;
  background: #ffffff;
  box-shadow: 0px 0.4rem 1.5rem rgba(0, 0, 0, 0.07);
  border-radius: 1rem;
  overflow: hidden;
  ${flexUnit(toVW(16, 320), 16, 35, 'vw', 'margin')};

  ${media.lessThan('sm')`
    padding: 1rem 1.8rem;
  `}
`

export const RatingWrapper = styled.div`
  font-size: 2.3rem;
  margin-bottom: 1.5rem;
  .react-rater {
    text-align: center;
  }
  .react-rater-star.is-active {
    color: ${$yellow};
  }
  .react-rater-star.is-active-half::before {
    color: ${$yellow};
  }
`
export const Text = styled(Paragraph)`
  font-size: 1.8rem;
  line-height: 2.8rem;
  letter-spacing: -0.01rem;
  color: ${$colorHeading};
  margin-bottom: 2.7rem;
  ${media.lessThan('sm')`
    font-size:1rem;
    margin-bottom: 0;
    line-height: 1.5rem;
  `}
`
export const PersonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;

  ${media.lessThan('sm')`
    margin-bottom: 1rem;
  `}
`
interface ImageWrapperProps {
  backgroundColor?: string
}
export const ImageWrapper = styled.div<ImageWrapperProps>`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? `${backgroundColor}` : '#E7E7E7'};
  width: 6.2rem;
  height: 6.2rem;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 2.5rem;

  ${media.lessThan('sm')`
    width: 2.8rem;
    height: 2.8rem;
    margin-right: 1rem;
  `}
`
export const StyledImage = styled(Image)`
  width: 3.7rem;
  height: 3.7rem;

  ${media.lessThan('sm')`
  width: 1.8rem;
  height: 1.8rem;
  `}
`
export const PersonTitle = styled.p`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 1.7rem;
  line-height: 2.2rem;
  color: ${$colorHeading};
  ${media.lessThan('sm')`
    line-height: 1rem;
  `}

  span {
    color: ${$colorText};
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 2.2rem;
    ${media.lessThan('sm')`
      font-size:0.9rem;
      line-height: 1.8rem;
  `}
  }

  ${media.lessThan('sm')`
    font-size:1rem;
  `}
`
