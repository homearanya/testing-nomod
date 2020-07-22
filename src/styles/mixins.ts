import { css, Keyframes } from 'styled-components'
import { rgba } from 'polished'

import { $white, $colorHeading, $colorBorder, $colorPrimary } from './variables'
import {
  fadeInBottom,
  slideFromBottom,
  slideSideWardsLeft,
  slideSideWardsRight,
  pulsate,
} from './common.styled'

export const standardBorderRadius = css`
  border: 0.1rem solid ${$colorBorder};
  border-radius: 0.5rem;
  overflow: hidden;
`

export const boxShadow = css`
  box-shadow: 0px 0.8rem 2.4rem ${rgba($colorPrimary, 0.12)};
`
export const boxShadowHover = `
box-shadow: 0 1.2rem 3.2rem rgba(28,10,54,0.2);
`
export const clearfix = css`
  &::after {
    content: '';
    display: table;
    clear: both;
  }
`
export const absoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const verticalCenter = css`
  margin: auto 0;
`

export const decorator = css`
  span {
    display: inline-block;
    position: relative;

    &.oval::before {
      content: '';
      height: 160%;
      width: 120%;
      ${absoluteCenter};
      transform: translate(-50%, -50%) rotate(-7deg);
      border: 0.3rem solid ${$colorPrimary};
      border-radius: 50%;
      z-index: -1;
    }
    &.underline::before {
      content: '';
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0.3rem;
      left: 0;
      border-bottom: 0.3rem solid ${$colorPrimary};
      z-index: -1;
    }
    &.highlight::before {
      content: '';
      height: 105%;
      width: 110%;
      ${absoluteCenter};
      background-color: #def200;
      z-index: -1;
    }
  }
`
export const centerTextBlock = css`
  max-width: 29rem;
  text-align: center;
  margin: 0 auto;
`

export function buttonStyles(
  inverted?: boolean,
  wide?: boolean,
  secondary?: boolean,
) {
  return css`
    font-size: 1.4rem;
    line-height: 1;
    display: inline-block;
    background-color: ${inverted
      ? $white
      : secondary
      ? $colorHeading
      : $colorPrimary};
    color: ${inverted ? (secondary ? $colorHeading : $colorPrimary) : $white};
    text-decoration: none;
    text-align: center;
    border: 0.1rem solid ${secondary ? $colorHeading : $colorPrimary};
    border-radius: 2.5rem;
    padding: ${wide ? '1.5rem 3rem' : '1.5rem 2.5rem'};
    transition: all 0.2s;
    /* Change for the <button> element */
    cursor: pointer;
    /* Webkit / Chrome Specific CSS to remove tap highlight color */
    -webkit-tap-highlight-color: transparent;
    /* Firefox Specific CSS to remove button differences and focus ring */
    background-image: none;
  `
}
export function buttonStylesHover(inverted?: boolean, secondary?: boolean) {
  return css`
    background-color: ${inverted
      ? secondary
        ? $colorHeading
        : $colorPrimary
      : $white};
    color: ${inverted ? $white : secondary ? $colorHeading : $colorPrimary};
  `
}

// FlexUnit
//  min, max in px
//
// At vw= 1349px
// amount px
// 6      81.96
// 8      109.28

export function toVW(x: number, y: number): number {
  return (x / y) * 100
}

export function flexUnit(
  amount: number,
  min: number,
  max: number,
  unit = 'vw',
  prop = 'font-size',
) {
  const minBreakpoint = (min / amount) * 100
  const maxBreakpoint = max ? (max / amount) * 100 : false
  const dimension = unit === 'vw' ? 'width' : 'height'

  return `
    @media only screen and (max-${dimension}: ${minBreakpoint}px) {
      ${prop}: ${min}px !important;
    }

    ${
      max
        ? `
      @media only screen and (min-${dimension}: ${maxBreakpoint}px) {
        ${prop}: ${max}px !important;
      }
    `
        : ''
    }

    ${prop}: ${amount}${unit} !important
  `
}
// All parameters in px
export function relativeFlexUnit(
  screenSize: number,
  minWidth: number,
  maxWidth: number,
  min: number,
  max: number,
  prop = 'font-size',
) {
  if (
    min < 0 ||
    max < 0 ||
    minWidth <= 0 ||
    maxWidth <= 0 ||
    max < min ||
    maxWidth < minWidth
  ) {
    return `
      ${prop}: ${min}px!important
    `
  }

  let amount = min
  if (screenSize <= minWidth) {
    amount = min
  } else if (screenSize >= maxWidth) {
    amount = max
  } else {
    amount =
      min + ((max - min) * (screenSize - minWidth)) / (maxWidth - minWidth)
  }

  return `
    ${prop}: ${amount}px !important
  `
}

// Animations

export function staggeredAnimation(
  animationName: Keyframes,
  animationDuration = 1,
  animationDelay = 0.2,
  animationDelayStep = 0.2,
  classNames: string[],
) {
  let delay = animationDelay
  return css`
    ${classNames.reduce((rules, className) => {
      delay += animationDelayStep
      return css`
           ${rules}
          .${className} {
            animation-name: ${animationName};
            animation-duration: ${animationDuration}s;
            animation-delay: ${delay}s;
            animation-fill-mode: both;
          }
        `
    }, css``)}
  `
}

export function animation(
  animationName: Keyframes,
  animationDuration = 1,
  animationDelay = 0,
  animationTimingTunction = 'linear',
  animationIterationCount: number | string = 1,
) {
  return css`
    animation-name: ${animationName};
    animation-duration: ${animationDuration}ms;
    animation-delay: ${animationDelay}ms;
    animation-timing-function: ${animationTimingTunction};
    animation-iteration-count: ${animationIterationCount};
    animation-fill-mode: forwards;
  `
}

// Transitions

export function transitionIntoView(
  withObserver: boolean | undefined,
  inView: boolean | undefined,
) {
  return withObserver
    ? css`
        opacity: 0;
        transition: opacity 1s;

        ${inView &&
          css`
            opacity: 1;
          `}
      `
    : css``
}
export function transitionIntoViewLeft(
  withObserver: boolean | undefined,
  inView: boolean | undefined,
  delay = 0,
) {
  return withObserver
    ? css`
        opacity: 0;
        transition-property: opacity, transform;
        transition-duration: 1s;
        transition-delay: ${delay}s;
        transform: translateX(-2rem);
        ${inView &&
          css`
            opacity: 1;
            transform: translateX(0);
          `}
      `
    : css``
}

export function transitionIntoViewTop(
  withObserver: boolean | undefined,
  inView: boolean | undefined,
  delay = 0,
) {
  return withObserver
    ? css`
        opacity: 0;
        transition-property: opacity, transform;
        transition-duration: 1s;
        transition-delay: ${delay}s;
        transform: translateY(-2rem);
        ${inView &&
          css`
            opacity: 1;
            transform: translateY(0);
          `}
      `
    : css``
}

const animationDuration = 700
const animationDelay = 100
const sideWardsDuration = animationDuration * 8

export const heroTextAnimation = css`
  .stripe-badge {
    ${animation(fadeInBottom, animationDuration, animationDelay * 7)};
    transform: translate(0, 2rem);
    opacity: 0;
  }
  .heading {
    ${animation(fadeInBottom, animationDuration, animationDelay * 4)};
    transform: translate(0, 2rem);
    opacity: 0;
  }
  .text {
    ${animation(fadeInBottom, animationDuration, animationDelay * 5)};
    transform: translate(0, 2rem);
    opacity: 0;
  }

  .apple-store-badge {
    ${animation(fadeInBottom, animationDuration, animationDelay * 9)};
    transform: translate(0, 2rem);
    opacity: 0;
  }

  .google-play-badge {
    ${animation(fadeInBottom, animationDuration, animationDelay * 11)};
    transform: translate(0, 2rem);
    opacity: 0;
  }
`
export const heroImageAnimation = css`
  .card-hand-chime {
    ${animation(
      slideFromBottom,
      animationDuration * 1.3,
      animationDelay * 5,
      'cubic-bezier(.08,.69,.19,1.01)',
    )};
  }
  .phone-on-hand {
    ${animation(
      slideFromBottom,
      animationDuration * 1.3,
      animationDelay * 2,
      'cubic-bezier(.08,.69,.19,1.01)',
    )};
  }
  .brush {
    ${animation(
      slideSideWardsLeft,
      sideWardsDuration,
      animationDuration,
      `linear`,
      'infinite',
    )};
  }
  .cupckake {
    ${animation(
      slideSideWardsLeft,
      sideWardsDuration + animationDuration / 10,
      animationDuration,
      `linear`,
      'infinite',
    )};
  }
  .dots-1 {
    ${animation(
      slideSideWardsRight,
      sideWardsDuration + animationDuration / 15,
      animationDuration,
      `linear`,
      'infinite',
    )};
  }
  .dots-2 {
    ${animation(
      slideSideWardsRight,
      sideWardsDuration + animationDuration / 15,
      animationDuration,
      `linear`,
      'infinite',
    )};
  }
  .ripple {
    ${animation(
      pulsate,
      sideWardsDuration + animationDuration / 15,
      animationDuration,
      `linear`,
      'infinite',
    )};
  }

  .shoe {
    ${animation(
      slideSideWardsLeft,
      sideWardsDuration + animationDuration / 15,
      animationDuration,
      `linear`,
      'infinite',
    )};
  }
  .sleeping {
    ${animation(
      slideSideWardsLeft,
      sideWardsDuration + animationDuration / 20,
      animationDuration,
      `linear`,
      'infinite',
    )};
  }
  .waves {
    ${animation(
      slideSideWardsLeft,
      sideWardsDuration + animationDuration / 5,
      animationDuration,
      `linear`,
      'infinite',
    )};
  }
`
