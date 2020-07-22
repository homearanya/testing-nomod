import styled from 'styled-components'

import { Paragraph } from '../../styles/common.styled'
import { $backgroundMain } from '../../styles/variables'
import media from '../../styles/media'

import Image from '../image'
import ReadMore from '../read-more'

export const StyledWrapper = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  background-color: ${$backgroundMain};
  margin-top: 11rem;
  ${media.lessThan('mlg')`
    margin-top: 9rem;
  `}
  ${media.lessThan('md')`
    margin-top: 7rem;
  `}
  ${media.lessThan('sm')`
    margin-top: 0rem;
    flex-direction: column-reverse;
    padding-bottom: 0;
    margin-bottom: 5rem;
  `}
`
export const ImageWrapper = styled.div`
  width: 100%;
  margin-top: -11rem;
  margin-bottom: 2.7rem;
  ${media.lessThan('sm')`
    margin-bottom: 0;
  `}
`

export const StyledImage = styled(Image)``

export const TextBlockWrapper = styled.div`
  ${media.lessThan('sm')`
    text-align: center;
    margin-bottom: 10rem;
  `}
`

export const TagNumber = styled(Paragraph)`
  font-weight: 500;
  font-size: 2rem;
  line-height: 4.7rem;
`

export const StyledReadMore = styled(ReadMore)`
  span {
  }

  ${media.lessThan('sm')`
    display: flex;
    justify-content: center;
  `}
`
