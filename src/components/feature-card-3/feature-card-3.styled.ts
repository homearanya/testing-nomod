import styled from 'styled-components'

import { Paragraph } from '../../styles/common.styled'
import { $backgroundMain } from '../../styles/variables'
import media from '../../styles/media'

import Image from '../image'
import ReadMore from '../read-more'
import Tag from '../tag'

export const StyledWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 7rem 5.5rem 3rem;
  background-color: ${$backgroundMain};
  margin-bottom: 3rem;
  height: 100%;
  ${media.lessThan('md')`
    padding: 3rem 3.5rem;
  `}
  ${media.lessThan('sm')`
    display:block;
  `}
`

interface TextBlockWrapperProps {
  tag?: boolean
}

export const TextBlockWrapper = styled.div<TextBlockWrapperProps>`
  ${media.lessThan('sm')`
    text-align: center;
  `}
`

export const TagNumber = styled(Paragraph)`
  font-weight: 500;
  font-size: 2rem;
  line-height: 4.7rem;
`

export const ImageBlockWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  ${media.lessThan('sm')`
      display:block;
    a:link,
    a:visited {
      justify-content:center;
    }
  `}
`

export const StyledReadMore = styled(ReadMore)`
  flex: 1 0 30%;
  align-self: flex-end;

  ${media.lessThan('md')`
    font-size:1.1rem!important;
  `}
  ${media.lessThan('sm')`
    margin-bottom: 3rem;
  `}
`

interface ImageWrapperProps {
  tag?: boolean
}
export const ImageWrapper = styled.div<ImageWrapperProps>`
  flex: 1 0 70%;
  width: 100%;
  margin-bottom: -3rem;
  margin-right: ${({ tag }) => (tag ? '0' : '-5.5rem')};

  ${({ tag }) =>
    media.lessThan('md')`
      margin-right: ${tag ? 0 : `${-3.5}rem`};
  `}

  ${media.lessThan('sm')`
    max-width: 32rem;
    margin-left:  auto;
    margin-right:  auto;
  `}
`

interface StyledImageProps {
  tag?: boolean
}
export const StyledImage = styled(Image)<StyledImageProps>`
  margin-right: ${({ tag }) => (tag ? 'auto' : '0 !important')};
`

export const StyledTag = styled(Tag)`
  display: inline-block;
  background: #ffffff;
  border: 0.1rem solid #244feb;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  padding: 0.5rem 1.5rem;
  margin-bottom: 2rem;
`
