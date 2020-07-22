import styled, { css } from 'styled-components'
import { CustomContainer } from '../../styles/common.styled'
import media from '../../styles/media'
import { $colorPrimary } from '../../styles/variables'

import {
  $white,
  $greyLightExtra,
  $greyRegularDark,
  $colorHeading,
  $colorBorder,
} from '../../styles/variables'
import { absoluteCenter } from '../../styles/mixins'

import StripeBadge from '../stripe-badge'
import TwitterIcon from '../../images/twitter.inline.svg'
import LanguageSwitcher from '../locale-switcher'

interface StyledFooterProps {
  noFooterTop?: boolean
}
export const StyledFooter = styled.footer<StyledFooterProps>`
  font-size: 1.6rem;
  background-color: ${$white};
  padding: ${({ noFooterTop }) => (noFooterTop ? '0' : '4.4rem 0 0')};
  color: ${$greyRegularDark};

  ${media.lessThan('md')`
    padding: 5rem 0 0;
    font-size: 1.4rem;
  `}
  ${media.lessThan('sm')`
    padding-top: 0;
  `}
`
interface StyledContainerProps {
  comingSoon?: boolean
}
export const StyledContainer = styled(CustomContainer)<StyledContainerProps>`
  ${({ comingSoon }) => css`
    ${media.greaterThan('md')`
      max-width: ${
        comingSoon ? '143.6rem !important' : '121.5rem  !important'
      }};
    `};
  `};

  ${media.greaterThan('md')`
    margin: 0 auto;
  `};
`

interface BottomMenuWrapperMobileProps {
  comingSoon?: boolean
}
export const BottomMenuWrapperMobile = styled.div<BottomMenuWrapperMobileProps>`
  border-top: ${({ comingSoon }) =>
    comingSoon ? `0.1rem solid ${$colorBorder}` : '0'};
  ${media.lessThan('sm')`
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

interface BottomMenuWrapperProps {
  comingSoon?: boolean
}
export const BottomMenuWrapper = styled.div<BottomMenuWrapperProps>`
  ${({ comingSoon }) => css`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: ${comingSoon ? '1.8rem 0' : '3rem 0'};
    ${media.lessThan('md')`
      margin: ${comingSoon ? '1rem 0' : '3rem 0'};
    `}
    ${media.lessThan('sm')`
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: ${comingSoon ? '3rem' : '0'};
    `}
  `};
`
export const StyledLanguageSwitcher = styled(LanguageSwitcher)`
  ${media.lessThan('sm')`
    margin-bottom: 3rem;
  `}
`
export const StyledStripeBadge = styled(StripeBadge)`
  ${absoluteCenter};
  ${media.between('sm', 'md')`
    left: 55%;
  `}
  ${media.lessThan('sm')`
    svg{
      width: 12rem;
      height: auto;
    }
    top: unset;
    bottom: -0.4rem;
    transform: none;
    left: unset;
    right: 2rem;
  `}
`

export const StyledTwitterIcon = styled(TwitterIcon)`
  ${media.lessThan('sm')`
    width: 2.2rem;
    height: auto;
  `}
`

export const StyledAnchor = styled.a`
  &:link,
  &:visited {
    color: ${$greyLightExtra};
    transition: color 0.2s;
    ${media.lessThan('sm')`
      margin-right: 14rem;
      line-height: 1;
    `}
  }

  &:hover,
  &:active {
    color: #30ace3;
  }
`
const menuItem = css`
  font-size: 1.6rem;
  line-height: 2.8rem;
  margin-bottom: 0rem;

  ${media.lessThan('md')`
    font-size: 1.4rem;
  `};
`
export const ComingSoonMenu = styled.div`
  ${absoluteCenter};
  left: 34rem;
  ul {
    list-style: none;
    display: flex;
    li {
      a:link,
      a:visited {
        display: inline-block;
        color: ${$greyRegularDark};
        ${menuItem};
        text-decoration: none;
        transition: all 0.2s;
        white-space: nowrap;

        ${media.lessThan('md')`
          font-size: 1.3rem;
        `}
        ${media.lessThan('sm')`
          font-size: 1.1rem;

        `}
      }

      a:hover,
      a:active {
        color: ${$colorPrimary};
      }
    }

    li:first-child {
      margin-right: 4rem;
      ${media.lessThan('sm')`
        margin-right: 3rem;
      `};
    }
  }

  ${media.lessThan('sm')`
    left: 50%;
    top: calc(50% + 0.7rem);
  `};
`

export const CopyRightWrapper = styled.div`
  ${media.greaterThan('md')`
    max-width: 143.6rem !important;
    margin: 0 auto;
  `};
  p {
    text-align: center;
    line-height: 3rem;
    padding: 2.6rem 0;
    border-top: 0.1rem solid ${$colorBorder};

    span {
      font-weight: 500;
      color: ${$colorHeading};
    }
    ${media.lessThan('xl')`
      padding: 2.1rem 0;
    `}
    ${media.lessThan('lg')`
      padding: 1.8rem 0;
    `}
    ${media.lessThan('mlg')`
      padding: 1.4rem 0;
    `}
    ${media.lessThan('md')`
      padding: 0.8rem 0;
    `}
    ${media.lessThan('sm')`
      font-size: 0.8rem;
      border-top-width: 0;
      padding: 0;
    `}
  }
`
