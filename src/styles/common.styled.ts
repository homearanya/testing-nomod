import styled, { keyframes } from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import media from './media'
import { $colorPrimary, $colorHeading, $colorText } from './variables'

// extending React Awesome Styled Grid

export const CustomContainer = styled(Container)`
  ${media.between('mlg', 'lg')`
    padding: 0 7.5rem;
  `};
`
export const CustomRow = styled(Row)`
  ${media.between('mlg', 'lg')`

  `};
`
export const CustomCol = styled(Col)`
  ${media.between('mlg', 'lg')`
  `};
`

// Headings

export const MainHeading = styled.h1`
  font-size: 6rem;
  line-height: 7.5rem;
  font-weight: normal;
  color: ${$colorHeading};
  ${media.lessThan('mlg')`
    font-size: 4.5rem;
    line-height: 5.7rem;
  `};
  ${media.lessThan('md')`
    font-size: 3.6rem;
    line-height: 4.8rem;
  `};
  ${media.lessThan('sm')`
    font-size: 2.9rem;
    line-height: 3.5rem;
  `};
`

export const H6 = styled.h6`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 5.5rem;
  color: ${$colorHeading};
`

export const H4 = styled.h4`
  color: ${$colorPrimary};
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.8rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
  letter-spacing: 0.5rem;

  ${media.lessThan('sm')`
    font-size: 1.2rem;
  `}
`

export const Paragraph = styled.p`
  color: ${$colorText};
  font-size: 2.2rem;
  line-height: 3.3rem;
  letter-spacing: -0.01rem;

  ${media.lessThan('lg')`
    font-size: 2rem;
  `};
  ${media.lessThan('mlg')`
    font-size: 1.9rem;
    line-height: 3.3rem;
  `};
  ${media.lessThan('md')`
    font-size: 1.8rem;
    line-height: 2.8rem;
  `};
  ${media.lessThan('sm')`
    font-size: 1.5rem;
    line-height: 2.4rem;
  `};
`

// Animations
export const fadeIn = keyframes`
0% {
  opacity: 0;

}

100% {
  opacity: 1;
}

`
export const fadeInLeft = keyframes`
0% {
  transform: translateX(-2rem);
  opacity: 0;

}

100% {
  transform: translateX(0);
  opacity: 1;
}
`
export const fadeInRight = keyframes`
0% {
  transform: translateX(2rem);
  opacity: 0;

}

100% {
  transform: translateX(0);
  opacity: 1;
}
`
export const fadeInTop = keyframes`
0% {
  transform: translateY(-2rem);
  opacity: 0;

}

100% {
  transform: translateY(0);
  opacity: 1;
}

`
export const fadeInBottom = keyframes`
0% {
  transform: translate(0, 2rem);
  opacity: 0;

}

100% {
  transform: translate(0, 0);
  opacity: 1;
}
`

export const slideFromBottom = keyframes`
0% {
  transform: translateY(100%);

}

100% {
  transform: translateY(0);
}
`
export const slideSideWardsRight = keyframes`
0%, 100% {
  transform: translate(0, 0);

}
5% {
  transform: translate(0.1rem, 0);
}

50% {
  transform: translate(2rem,0);
}

95% {
  transform: translate(0.1rem, 0);
}

`
export const slideSideWardsLeft = keyframes`
0%, 100% {
  transform: translate(0,0);

}
5% {
  transform: translate(-0.1rem,0);
}

50% {
  transform: translate(-2rem,0);
}

95% {
  transform: translateX(0.1rem,0);
}

`
export const pulsate = keyframes`
0%, 100% {
  transform: scale(1);

}
5%,95% {
  transform: scale(1.01);
}

50% {
  transform: scale(1.1);
}

`

export const dropdownOpen = keyframes`
0% {
  transform: scale(0);
  opacity: 0;

}

100% {
  transform: scale(1);
  opacity: 1;
}
`

export const zommInOut = keyframes`
0% {
  transform: translateX(-50%) scale(0);
  opacity: 0;

}
25% {
  transform: translateX(-50%) scale(1);
  opacity: 1;
}
75% {
  transform: translateX(-50%)scale(1);
  opacity: 1;
}
100% {
  transform: translateX(-50%) scale(0);
  opacity: 0;
}
`
export const zoomInOutColor = keyframes`
0% {
  color: #dedfe9;

}
25% {
  color: #144de0;
}
75% {
  color: #144de0;
}
100% {
  color: #dedfe9;
}
`
