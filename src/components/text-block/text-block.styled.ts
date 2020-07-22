import styled, { css } from 'styled-components'

import media from '../../styles/media'
import { MainHeading, Paragraph } from '../../styles/common.styled'
import UniversalLink from '../universal-link/universal-link'

import AppleStoreBadge from '../../images/apple-store.inline.svg'
import GooglePlayBadge from '../../images/google-play.inline.svg'
import Image from '../image'

interface Wrapperprops {
  align?: string
}
export const Wrapper = styled.div<Wrapperprops>`
  text-align: ${({ align }) => (align ? `${align}` : 'left')};
`

export const Icon = styled(Image)`
  margin-bottom: 1rem;
`

export const Heading = styled(MainHeading)`
  margin-bottom: 3rem;
  ${media.lessThan('mlg')`
      margin-bottom: 3rem;
  `};
  ${media.lessThan('md')`
      margin-bottom: 3rem;
  `};
  ${media.lessThan('sm')`
      margin-bottom: 2rem;
  `};
`

interface Textprops {
  align?: string
}
export const Text = styled(Paragraph)<Textprops>`
  max-width: 76.2rem;
  margin: ${({ align }) =>
    align && align === 'center' ? '0 auto' : '0 auto 0 0'};

  margin-bottom: 2rem;
  &.last {
    margin-bottom: 5rem;
  }
  ${media.lessThan('mlg')`
    &.last {
      margin-bottom: 4rem;
    }
  `};
  ${media.lessThan('md')`
    &.last {
        margin-bottom: 3rem;
      }
  `};
`
interface StoreBadgesWrapperprops {
  align?: string
}
export const StoreBadgesWrapper = styled.div<StoreBadgesWrapperprops>`
  display: flex;
  justify-content: ${({ align }) => (align === 'center' ? 'center' : 'start')};
  ${media.lessThan('sm')`
    margin-bottom: 1rem;
  `};
`

export const StyledUniversalLink = styled(UniversalLink)`
  :first-child {
    margin-right: 3rem;
  }
`

const badgeStyled = css`
  ${media.lessThan('lg')`
    width: 16.7rem;
  `};
  ${media.lessThan('mlg')`
    width: 15rem;
  `};
  /* ${media.lessThan('md')`
    width: 10.1rem;
  `};
  ${media.lessThan('sm')`
    width: 11.6rem;
  `}; */
`
export const StyledAppleStoreBadge = styled(AppleStoreBadge)`
  ${badgeStyled};
`
export const StyledGooglePlayBadge = styled(GooglePlayBadge)`
  ${badgeStyled};
`
