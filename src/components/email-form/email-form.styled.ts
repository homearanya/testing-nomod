import styled from 'styled-components'

import media from '../../styles/media'
import {
  $white,
  $green,
  $greenHover,
  $colorBorder,
  $colorHeading,
  $colorDanger,
  $colorPrimary,
} from '../../styles/variables'
import { absoluteCenter } from '../../styles/mixins'

export const IntroText = styled.p`
  font-size: 2rem;
  line-height: 2.8rem;
  /* identical to box height, or 140% */

  letter-spacing: -0.01rem;

  color: ${$colorHeading};
  margin-bottom: 2rem;

  ${media.lessThan('md')`
    font-size: 1.8rem;
    text-align: center;
  `};
  ${media.lessThan('sm')`
    font-size: 1.4rem;
    line-height: 2.8rem;
  `};
`

export const StyledForm = styled.form`
  position: relative;
  width: 100%;
  max-width: 45rem;
  ${media.lessThan('md')`
    max-width: 42rem;
  `}
`

export const InputWrapper = styled.div`
  width: 100%;
`

interface StyledInputProps {
  border?: boolean
  message: boolean
}
export const StyledInput = styled.input<StyledInputProps>`
  && {
    font: inherit;
    border: none;
    width: 100%;
    padding: 2.1rem 12rem 2.1rem 2rem;
    overflow: hidden;
    border: ${({ border, message }) =>
      border ? `1px solid  ${message ? '#878795' : $colorBorder}` : 'none'};
    box-shadow: 0rem 0.5rem 5rem rgba(43, 68, 160, 0.12);
    border-radius: 1rem;
    font-size: 1.6rem;
    line-height: normal !important;

    letter-spacing: -0.01rem;
    transition: 0.2s all;
    color: ${({ message }) =>
      message ? `${$colorDanger}` : `${$colorHeading}`};
    background-color: ${({ message }) => (message ? `#FFF5F0` : `${$white}`)};

    :focus {
      outline: 0;
      border: ${({ border }) => (border ? `0.1rem solid  #878795` : 'none')};
    }

    &::placeholder {
      font-weight: normal;
      font-size: 1.6rem;
      line-height: normal !important;
      vertical-align: middle;
      letter-spacing: -0.01rem;
      color: #98a1ae;
      transition: 0.2s all;
      opacity: ${({ message }) => (message ? `0` : `1`)};
      ${media.lessThan('md')`
        font-size:1.4rem;
      `}
      ${media.lessThan('sm')`
        font-size:1.2rem;
      `}
    }
    ${media.lessThan('md')`
      font-size:1.4rem;
      padding: 1.7rem 11rem 1.7rem 1.5rem;
    `}
    ${media.lessThan('sm')`
      font-size:1.2rem;
      padding: 1.4rem 8rem 1.4rem 1.5rem;
    `}
  }
`
interface ButtonWrapperProps {
  submitting?: boolean
}
export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  border: 1px solid transparent;
  /* transform: translateX(-100%); */
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  overflow: hidden;
  /* flex: 1 0 auto; */

  &&::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: ${({ submitting }) => (submitting ? '100%' : '0')};
    width: 100%;
    background-color: ${$colorPrimary};
  }

  .loader {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    svg {
      ${absoluteCenter};
      z-index: 1;
    }
  }
`
interface StyledButtonProps {
  submitting?: boolean
}
export const StyledButton = styled.button<StyledButtonProps>`
  &&& {
    font: inherit;
    appearance: none;
    -webkit-appearance: button;
    cursor: pointer;
    outline: 0;
    border: none;
    padding: 0 2rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: normal !important;
    vertical-align: middle;
    text-align: center;
    height: 100%;

    transition: 0.2s all;

    &&,
    &&:link,
    &&:visited {
      background: ${$green} none repeat scroll 0 0;
      color: ${({ submitting }) => (submitting ? `${$green}` : `${$white}`)};
    }

    &&:hover,
    &&:active {
      background-color: ${$greenHover};
    }

    ${media.lessThan('md')`
      font-size:1.2rem;
    `}

    ${media.lessThan('sm')`
      font-size: 1rem;
      padding: 0 1.3rem;
    `}
  }
`

interface ValidationMessageProps {
  width?: number
}
export const ValidationMessage = styled.div<ValidationMessageProps>`
  position: absolute;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  bottom: -3.5rem;
  text-align: center;
  font-size: 1.4rem;
  line-height: 2.8rem;
  letter-spacing: -0.01rem;
  color: ${$colorDanger};
  ${media.lessThan('md')`
      font-size:1.2rem;
  `}
  ${media.lessThan('sm')`
      bottom: -3rem;
      font-size:1rem;
  `}
`

interface ResultMessageProps {
  submitted?: boolean
}
export const ResultMessage = styled.div<ResultMessageProps>`
  position: relative;
  top: -2rem;
  color: ${({ submitted }) => (submitted ? $colorPrimary : $colorDanger)};
  font-size: 2.2rem;
  line-height: 3.9rem;
  letter-spacing: -0.01rem;
  ${media.lessThan('mlg')`
      font-size:1.8rem;
      line-height: 3rem;
      top: -1rem;
  `}
  ${media.lessThan('md')`
    text-align:center;
    font-size:1.6rem;
    top: 0rem;
  `}  
  ${media.lessThan('sm')`
      font-size:1.2rem;
      line-height: 2.3rem;
  `}  
  a,
  a:link,
  a:visited {
    display:block;
    color: ${$colorPrimary};
    transition: 0.2s all;
    font-size: 2.2rem;
    line-height: 3.9rem;
    letter-spacing: -0.01rem;
    ${media.lessThan('mlg')`
      font-size:1.8rem;
      line-height: 3rem;

    `}
    ${media.lessThan('md')`
        font-size:1.6rem;
    `}  
    ${media.lessThan('sm')`
        font-size:1.2rem;
        line-height: 2.3rem;
    `}  
  }

  a:hover,
  a:active {
    color: ${$colorPrimary};
  }
`
