import styled from 'styled-components'
import media from '../../styles/media'
import { flexUnit, toVW, heroImageAnimation } from '../../styles/mixins'

const maxWidth = 925
const maxHeight = 482
const ratio = 482 / 925

export const Wrapper = styled.div`
  width: ${`${maxWidth / 10}rem`};
  height: ${`${maxHeight / 10}rem`};
  overflow: hidden;
  margin: 0 auto;
  ${media.lessThan('mlg')`
    ${flexUnit(toVW(742, 1024), 742, maxWidth, 'vw', 'width')};
    ${flexUnit(
      toVW(742 * ratio, 1024),
      742 * ratio,
      maxHeight,
      'vw',
      'height',
    )};
  `};
  ${media.lessThan('md')`
    ${flexUnit(toVW(513, 768), 513, 742, 'vw', 'width')};
    ${flexUnit(
      toVW(513 * ratio, 768),
      513 * ratio,
      742 * ratio,
      'vw',
      'height',
    )};

  `};
  ${media.lessThan('sm')`
    ${flexUnit(toVW(310, 360), 280, 513, 'vw', 'width')};
    ${flexUnit(
      toVW(310 * ratio, 360),
      290 * ratio,
      513 * ratio,
      'vw',
      'height',
    )};

  `};

  position: relative;
  .brush {
    position: absolute;
    left: ${`${(115 / maxWidth) * 100}%`};
    bottom: ${`${(355 / maxHeight) * 100}%`};
    width: ${`${(71 / maxWidth) * 100}%`};
    height: ${`${(70 / maxHeight) * 100}%`};
    box-shadow: 0px 0.5rem 2rem rgba(0, 0, 0, 0.1);
  }
  .card-hand-chime {
    position: absolute;
    right: ${`${(12 / maxWidth) * 100}%`};
    bottom: ${`${(0 / maxHeight) * 100}%`};
    width: ${`${(415 / maxWidth) * 100}%`};
    height: ${`${(434 / maxHeight) * 100}%`};
    transform: translateY(100%);
  }
  .cupckake {
    position: absolute;
    right: 10rem;
    bottom: 10rem;
    left: ${`${(587 / maxWidth) * 100}%`};
    bottom: ${`${(40 / maxHeight) * 100}%`};
    width: ${`${(66 / maxWidth) * 100}%`};
    height: ${`${(66 / maxHeight) * 100}%`};
    box-shadow: 0px 0.5rem 2rem rgba(0, 0, 0, 0.1);
  }

  .dots-1 {
    position: absolute;
    left: ${`${(87 / maxWidth) * 100}%`};
    bottom: ${`${(205 / maxHeight) * 100}%`};
    z-index: -1;
    width: ${`${(286 / maxWidth) * 100}%`};
    height: ${`${(170 / maxHeight) * 100}%`};
  }
  .dots-2 {
    position: absolute;
    left: ${`${(596 / maxWidth) * 100}%`};
    bottom: ${`${(90 / maxHeight) * 100}%`};
    z-index: -1;
    width: ${`${(113 / maxWidth) * 100}%`};
    height: ${`${(84 / maxHeight) * 100}%`};
  }
  .ripple {
    position: absolute;
    right: ${`${(20 / maxWidth) * 100}%`};
    bottom: ${`${(209 / maxHeight) * 100}%`};
    z-index: -1;
    width: ${`${(198 / maxWidth) * 100}%`};
    height: ${`${(178 / maxHeight) * 100}%`};
  }
  .phone-on-hand {
    position: absolute;
    left: ${`${(0 / maxWidth) * 100}%`};
    bottom: ${`${(0 / maxHeight) * 100}%`};
    width: ${`${(433 / maxWidth) * 100}%`};
    height: ${`${(482 / maxHeight) * 100}%`};
    transform: translateY(100%);
  }
  .shoe {
    position: absolute;
    right: 10rem;
    bottom: 10rem;
    left: ${`${(799 / maxWidth) * 100}%`};
    bottom: ${`${(344 / maxHeight) * 100}%`};
    width: ${`${(74 / maxWidth) * 100}%`};
    height: ${`${(73 / maxHeight) * 100}%`};
    box-shadow: 0px 0.5rem 2rem rgba(0, 0, 0, 0.1);
  }
  .sleeping {
    position: absolute;
    left: ${`${(28 / maxWidth) * 100}%`};
    bottom: ${`${(155 / maxHeight) * 100}%`};
    width: ${`${(66 / maxWidth) * 100}%`};
    height: ${`${(66 / maxHeight) * 100}%`};
    box-shadow: 0px 0.5rem 2rem rgba(0, 0, 0, 0.1);
  }
  .waves {
    position: absolute;
    left: ${`${(260 / maxWidth) * 100}%`};
    bottom: ${`${(60 / maxHeight) * 100}%`};
    z-index: -1;
    width: ${`${(126 / maxWidth) * 100}%`};
    height: ${`${(30 / maxHeight) * 100}%`};
  }

  .ripple {
    transform: scale(0);
    transition: transform 500ms linear;
  }
  .dots-1,
  .dots-2,
  .waves {
    opacity: 0;
    transition: opacity 500ms linear;
  }
  .cupckake,
  .brush,
  .sleeping,
  .shoe {
    transform: translate(0, 2rem);
    opacity: 0;
    transition: all 700ms linear;
  }

  &.image-loaded {
    ${heroImageAnimation};

    .ripple {
      transform: scale(1);
    }
    .dots-1,
    .dots-2,
    .waves {
      opacity: 1;
    }
    .cupckake,
    .brush,
    .sleeping,
    .shoe {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
`
