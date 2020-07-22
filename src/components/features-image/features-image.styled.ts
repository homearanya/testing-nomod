import styled, { css } from 'styled-components'
import media from '../../styles/media'
import { animation } from '../../styles/mixins'
import { zommInOut, zoomInOutColor } from '../../styles/common.styled'

const maxWidth = 992.38
const ratioImage = 628.47 / 992.38

export const AnimationContainer = styled.div`
  max-width: ${`${maxWidth / 10}rem`};
  margin: 0 auto;
`
export const MapWrapper = styled.div`
  width: 100%;
  padding-bottom: ${`calc(${100 * ratioImage}%)`};
  position: absolute;
  top: 0;
  left: 0;
`

interface WrapperProps {
  transactions: {
    [key: string]: { loaded: boolean; zIndex: number }
  }
}
export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  padding-bottom: ${`calc(${100 * ratioImage}% + 5rem)`};
  ${media.lessThan('mlg')`
    width: 100%;
  `};

  position: relative;
  .world-map {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #dedfe9;
    path {
      &.toronto {
        transition: color 1.5s ease-in-out 1s;
        color: #dedfe9;
        ${({ transactions }) =>
          transactions['Toronto'].loaded &&
          animation(zoomInOutColor, 2500, 0, 'ease-in-out')};
      }
      &.vancouver {
        transition: color 1.5s ease-in-out 1s;
        color: #dedfe9;
        ${({ transactions }) =>
          transactions['Vancouver'].loaded &&
          animation(zoomInOutColor, 2500, 0, 'ease-in-out')};
      }
      &.san-francisco {
        transition: color 1.5s ease-in-out 1s;
        color: #dedfe9;
        ${({ transactions }) =>
          transactions['San Francisco'].loaded &&
          animation(zoomInOutColor, 2500, 0, 'ease-in-out')};
      }
      &.boston {
        transition: color 1.5s ease-in-out 1s;
        color: #dedfe9;
        ${({ transactions }) =>
          transactions['Boston'].loaded &&
          animation(zoomInOutColor, 2500, 0, 'ease-in-out')};
      }
      &.new-york {
        transition: color 1.5s ease-in-out 1s;
        color: #dedfe9;
        ${({ transactions }) =>
          transactions['New York'].loaded &&
          animation(zoomInOutColor, 2500, 0, 'ease-in-out')};
      }
      &.london-manchester {
        transition: color 1.5s ease-in-out 1s;
        color: #dedfe9;
        ${({ transactions }) =>
          (transactions['London'].loaded ||
            transactions['Manchester'].loaded) &&
          animation(zoomInOutColor, 2500, 0, 'ease-in-out')};
      }
      &.paris {
        transition: color 1.5s ease-in-out 1s;
        color: #dedfe9;
        ${({ transactions }) =>
          transactions['Paris'].loaded &&
          animation(zoomInOutColor, 2500, 0, 'ease-in-out')};
      }
      &.geneva-zurich {
        transition: color 1.5s ease-in-out 1s;
        color: #dedfe9;
        ${({ transactions }) =>
          (transactions['Geneva'].loaded || transactions['Zurich'].loaded) &&
          animation(zoomInOutColor, 2500, 0, 'ease-in-out')};
      }
      &.hong-kong {
        transition: color 1.5s ease-in-out 1s;
        color: #dedfe9;
        ${({ transactions }) =>
          transactions['Hong Kong'].loaded &&
          animation(zoomInOutColor, 2500, 0, 'ease-in-out')};
      }
      &.melbourne {
        transition: color 1.5s ease-in-out 1s;
        color: #dedfe9;
        ${({ transactions }) =>
          transactions['Melbourne'].loaded &&
          animation(zoomInOutColor, 2500, 0, 'ease-in-out')};
      }
      &.sydney {
        transition: color 1.5s ease-in-out 1s;
        color: #dedfe9;
        ${({ transactions }) =>
          transactions['Sydney'].loaded &&
          animation(zoomInOutColor, 2500, 0, 'ease-in-out')};
      }
      &.munich {
        transition: color 1.5s ease-in-out 1s;
        color: #dedfe9;
        ${({ transactions }) =>
          transactions['Munich'].loaded &&
          animation(zoomInOutColor, 2500, 0, 'ease-in-out')};
      }
      &.frankfurt {
        transition: color 1.5s ease-in-out 1s;
        color: #dedfe9;
        ${({ transactions }) =>
          transactions['Frankfurt'].loaded &&
          animation(zoomInOutColor, 2500, 0, 'ease-in-out')};
      }
      &.rome {
        transition: color 1.5s ease-in-out 1s;
        color: #dedfe9;
        ${({ transactions }) =>
          transactions['Rome'].loaded &&
          animation(zoomInOutColor, 2500, 0, 'ease-in-out')};
      }
      &.madrid {
        transition: color 1.5s ease-in-out 1s;
        color: #dedfe9;
        ${({ transactions }) =>
          transactions['Madrid'].loaded &&
          animation(zoomInOutColor, 2500, 0, 'ease-in-out')};
      }
      &.brussels {
        transition: color 1.5s ease-in-out 1s;
        color: #dedfe9;
        ${({ transactions }) =>
          transactions['Brussels'].loaded &&
          animation(zoomInOutColor, 2500, 0, 'ease-in-out')};
      }
      &.amsterdam {
        transition: color 1.5s ease-in-out 1s;
        color: #dedfe9;
        ${({ transactions }) =>
          transactions['Amsterdam'].loaded &&
          animation(zoomInOutColor, 2500, 0, 'ease-in-out')};
      }
      &.budapest {
        transition: color 1.5s ease-in-out 1s;
        color: #dedfe9;
        ${({ transactions }) =>
          transactions['Budapest'].loaded &&
          animation(zoomInOutColor, 2500, 0, 'ease-in-out')};
      }
      &.shanghai {
        transition: color 1.5s ease-in-out 1s;
        color: #dedfe9;
        ${({ transactions }) =>
          transactions['Shanghai'].loaded &&
          animation(zoomInOutColor, 2500, 0, 'ease-in-out')};
      }
      &.beijing {
        transition: color 1.5s ease-in-out 1s;
        color: #dedfe9;
        ${({ transactions }) =>
          transactions['Beijing'].loaded &&
          animation(zoomInOutColor, 2500, 0, 'ease-in-out')};
      }
      &.singapore {
        transition: color 1.5s ease-in-out 1s;
        color: #dedfe9;
        ${({ transactions }) =>
          transactions['Singapore'].loaded &&
          animation(zoomInOutColor, 2500, 0, 'ease-in-out')};
      }
      &.vienna {
        transition: color 1.5s ease-in-out 1s;
        color: #dedfe9;
        ${({ transactions }) =>
          transactions['Vienna'].loaded &&
          animation(zoomInOutColor, 2500, 0, 'ease-in-out')};
      }
    }
  }

  .toronto-image {
    position: absolute;
    left: 24.2%;
    bottom: 55.9%;
    transition: transform 1.5s ease-in-out 1s;

    ${({ transactions }) =>
      transactions['Toronto'].loaded
        ? css`
            ${animation(zommInOut, 2500, 0, 'ease-in-out')};
            z-index: ${transactions['Toronto'].zIndex};
          `
        : css`
            transform: translateX(-50%) scale(0);
          `};
    ${media.lessThan('sm')`
      bottom: calc(55.9% + 0.3rem);
    `};
  }
  .vancouver-image {
    position: absolute;
    left: 12%;
    bottom: 60.4%;
    transition: transform 1.5s ease-in-out 1s;
    ${({ transactions }) =>
      transactions['Vancouver'].loaded
        ? css`
            ${animation(zommInOut, 2500, 0, 'ease-in-out')};
            z-index: ${transactions['Vancouver'].zIndex};
          `
        : css`
            transform: translateX(-50%) scale(0);
          `};
    ${media.lessThan('sm')`
      bottom: calc(60.4% + 0.3rem);
    `};
  }
  .san-francisco-image {
    position: absolute;
    left: 12%;
    bottom: 51.3%;
    transition: transform 1.5s ease-in-out 1s;
    ${({ transactions }) =>
      transactions['San Francisco'].loaded
        ? css`
            ${animation(zommInOut, 2500, 0, 'ease-in-out')};
            z-index: ${transactions['San Francisco'].zIndex};
          `
        : css`
            transform: translateX(-50%) scale(0);
          `};
    ${media.lessThan('sm')`
      bottom: calc(51.3% + 0.3rem);
    `};
  }
  .boston-image {
    position: absolute;
    left: 27%;
    bottom: 54.5%;
    transition: transform 1.5s ease-in-out 1s;
    ${({ transactions }) =>
      transactions['Boston'].loaded
        ? css`
            ${animation(zommInOut, 2500, 0, 'ease-in-out')};
            z-index: ${transactions['Boston'].zIndex};
          `
        : css`
            transform: translateX(-50%) scale(0);
          `};
    ${media.lessThan('sm')`
      bottom: calc(54.5% + 0.3rem);
    `};
  }
  .new-york-image {
    position: absolute;
    left: 26.1%;
    bottom: 52.9%;
    transition: transform 1.5s ease-in-out 1s;
    ${({ transactions }) =>
      transactions['New York'].loaded
        ? css`
            ${animation(zommInOut, 2500, 0, 'ease-in-out')};
            z-index: ${transactions['New York'].zIndex};
          `
        : css`
            transform: translateX(-50%) scale(0);
          `};
    ${media.lessThan('sm')`
      bottom: calc(52.9% + 0.3rem);
    `};
  }
  .manchester-image {
    position: absolute;
    left: 46.9%;
    bottom: 59%;
    transition: transform 1.5s ease-in-out 1s;
    ${({ transactions }) =>
      transactions['Manchester'].loaded
        ? css`
            ${animation(zommInOut, 2500, 0, 'ease-in-out')};
            z-index: ${transactions['Manchester'].zIndex};
          `
        : css`
            transform: translateX(-50%) scale(0);
          `};
    ${media.lessThan('sm')`
      bottom: calc(59% + 0.3rem);
    `};
  }
  .london-image {
    position: absolute;
    left: 46.9%;
    bottom: 59%;
    transition: transform 1.5s ease-in-out 1s;
    ${({ transactions }) =>
      transactions['London'].loaded
        ? css`
            ${animation(zommInOut, 2500, 0, 'ease-in-out')};
            z-index: ${transactions['London'].zIndex};
          `
        : css`
            transform: translateX(-50%) scale(0);
          `};
    ${media.lessThan('sm')`
      bottom: calc(59% + 0.3rem);
    `};
  }
  .paris-image {
    position: absolute;
    left: 46.8%;
    bottom: 55.9%;
    transition: transform 1.5s ease-in-out 1s;
    ${({ transactions }) =>
      transactions['Paris'].loaded
        ? css`
            ${animation(zommInOut, 2500, 0, 'ease-in-out')};
            z-index: ${transactions['Paris'].zIndex};
          `
        : css`
            transform: translateX(-50%) scale(0);
          `};
    ${media.lessThan('sm')`
      bottom: calc(55.9% + 0.3rem);
    `};
  }
  .geneva-image {
    position: absolute;
    left: 47.8%;
    bottom: 54.3%;
    transition: transform 1.5s ease-in-out 1s;
    ${({ transactions }) =>
      transactions['Geneva'].loaded
        ? css`
            ${animation(zommInOut, 2500, 0, 'ease-in-out')};
            z-index: ${transactions['Geneva'].zIndex};
          `
        : css`
            transform: translateX(-50%) scale(0);
          `};
    ${media.lessThan('sm')`
      bottom: calc(54.3% + 0.3rem);
    `};
  }
  .zurich-image {
    position: absolute;
    left: 47.8%;
    bottom: 54.3%;
    transition: transform 1.5s ease-in-out 1s;
    ${({ transactions }) =>
      transactions['Zurich'].loaded
        ? css`
            ${animation(zommInOut, 2500, 0, 'ease-in-out')};
            z-index: ${transactions['Zurich'].zIndex};
          `
        : css`
            transform: translateX(-50%) scale(0);
          `};
    ${media.lessThan('sm')`
      bottom: calc(54.3% + 0.3rem);
    `};
  }
  .hong-kong-image {
    position: absolute;
    left: 78%;
    bottom: 42.5%;
    transition: transform 1.5s ease-in-out 1s;
    ${({ transactions }) =>
      transactions['Hong Kong'].loaded
        ? css`
            ${animation(zommInOut, 2500, 0, 'ease-in-out')};
            z-index: ${transactions['Hong Kong'].zIndex};
          `
        : css`
            transform: translateX(-50%) scale(0);
          `};
    ${media.lessThan('sm')`
      bottom: calc(42.5% + 0.3rem);
    `};
  }
  .melbourne-image {
    position: absolute;
    left: 88.4%;
    bottom: 14.3%;
    transition: transform 1.5s ease-in-out 1s;
    ${({ transactions }) =>
      transactions['Melbourne'].loaded
        ? css`
            ${animation(zommInOut, 2500, 0, 'ease-in-out')};
            z-index: ${transactions['Melbourne'].zIndex};
          `
        : css`
            transform: translateX(-50%) scale(0);
          `};
    ${media.lessThan('sm')`
      bottom: calc(14.3% + 0.3rem);
    `};
  }
  .sydney-image {
    position: absolute;
    left: 90.3%;
    bottom: 17.3%;
    transition: transform 1.5s ease-in-out 1s;
    ${({ transactions }) =>
      transactions['Sydney'].loaded
        ? css`
            ${animation(zommInOut, 2500, 0, 'ease-in-out')};
            z-index: ${transactions['Sydney'].zIndex};
          `
        : css`
            transform: translateX(-50%) scale(0);
          `};
    ${media.lessThan('sm')`
      bottom: calc(17.3% + 0.3rem);
    `};
  }
  .munich-image {
    position: absolute;
    left: 52.5%;
    bottom: 56%;
    transition: transform 1.5s ease-in-out 1s;
    ${({ transactions }) =>
      transactions['Munich'].loaded
        ? css`
            ${animation(zommInOut, 2500, 0, 'ease-in-out')};
            z-index: ${transactions['Munich'].zIndex};
          `
        : css`
            transform: translateX(-50%) scale(0);
          `};
    ${media.lessThan('sm')`
      bottom: calc(56% + 0.3rem);
    `};
  }
  .frankfurt-image {
    position: absolute;
    left: 51.6%;
    bottom: 57.6%;
    transition: transform 1.5s ease-in-out 1s;
    ${({ transactions }) =>
      transactions['Frankfurt'].loaded
        ? css`
            ${animation(zommInOut, 2500, 0, 'ease-in-out')};
            z-index: ${transactions['Frankfurt'].zIndex};
          `
        : css`
            transform: translateX(-50%) scale(0);
          `};
    ${media.lessThan('sm')`
      bottom: calc(57.6% + 0.3rem);
    `};
  }
  .rome-image {
    position: absolute;
    left: 52.5%;
    bottom: 53%;
    transition: transform 1.5s ease-in-out 1s;
    ${({ transactions }) =>
      transactions['Rome'].loaded
        ? css`
            ${animation(zommInOut, 2500, 0, 'ease-in-out')};
            z-index: ${transactions['Rome'].zIndex};
          `
        : css`
            transform: translateX(-50%) scale(0);
          `};
    ${media.lessThan('sm')`
      bottom: calc(53% + 0.3rem);
    `};
  }
  .madrid-image {
    position: absolute;
    left: 46%;
    bottom: 51.8%;
    transition: transform 1.5s ease-in-out 1s;
    ${({ transactions }) =>
      transactions['Madrid'].loaded
        ? css`
            ${animation(zommInOut, 2500, 0, 'ease-in-out')};
            z-index: ${transactions['Madrid'].zIndex};
          `
        : css`
            transform: translateX(-50%) scale(0);
          `};
    ${media.lessThan('sm')`
      bottom: calc(51.8% + 0.3rem);
    `};
  }
  .brussels-image {
    position: absolute;
    left: 48.8%;
    bottom: 56%;
    transition: transform 1.5s ease-in-out 1s;
    ${({ transactions }) =>
      transactions['Brussels'].loaded
        ? css`
            ${animation(zommInOut, 2500, 0, 'ease-in-out')};
            z-index: ${transactions['Brussels'].zIndex};
          `
        : css`
            transform: translateX(-50%) scale(0);
          `};
    ${media.lessThan('sm')`
      bottom: calc(56% + 0.3rem);
    `};
  }
  .amsterdam-image {
    position: absolute;
    left: 48.8%;
    bottom: 59%;
    transition: transform 1.5s ease-in-out 1s;
    ${({ transactions }) =>
      transactions['Amsterdam'].loaded
        ? css`
            ${animation(zommInOut, 2500, 0, 'ease-in-out')};
            z-index: ${transactions['Amsterdam'].zIndex};
          `
        : css`
            transform: translateX(-50%) scale(0);
          `};
    ${media.lessThan('sm')`
      bottom: calc(59% + 0.3rem);
    `};
  }
  .budapest-image {
    position: absolute;
    left: 55.4%;
    bottom: 54.5%;
    transition: transform 1.5s ease-in-out 1s;
    ${({ transactions }) =>
      transactions['Budapest'].loaded
        ? css`
            ${animation(zommInOut, 2500, 0, 'ease-in-out')};
            z-index: ${transactions['Budapest'].zIndex};
          `
        : css`
            transform: translateX(-50%) scale(0);
          `};
    ${media.lessThan('sm')`
      bottom: calc(54.5% + 0.3rem);
    `};
  }
  .shanghai-image {
    position: absolute;
    left: 81.7%;
    bottom: 45.6%;
    transition: transform 1.5s ease-in-out 1s;
    ${({ transactions }) =>
      transactions['Shanghai'].loaded
        ? css`
            ${animation(zommInOut, 2500, 0, 'ease-in-out')};
            z-index: ${transactions['Shanghai'].zIndex};
          `
        : css`
            transform: translateX(-50%) scale(0);
          `};
    ${media.lessThan('sm')`
      bottom: calc(45.6% + 0.3rem);
    `};
  }
  .beijing-image {
    position: absolute;
    left: 79%;
    bottom: 53%;
    transition: transform 1.5s ease-in-out 1s;
    ${({ transactions }) =>
      transactions['Beijing'].loaded
        ? css`
            ${animation(zommInOut, 2500, 0, 'ease-in-out')};
            z-index: ${transactions['Beijing'].zIndex};
          `
        : css`
            transform: translateX(-50%) scale(0);
          `};
    ${media.lessThan('sm')`
      bottom: calc(53% + 0.3rem);
    `};
  }
  .singapore-image {
    position: absolute;
    left: 76.2%;
    bottom: 33.5%;
    transition: transform 1.5s ease-in-out 1s;
    ${({ transactions }) =>
      transactions['Singapore'].loaded
        ? css`
            ${animation(zommInOut, 2500, 0, 'ease-in-out')};
            z-index: ${transactions['Singapore'].zIndex};
          `
        : css`
            transform: translateX(-50%) scale(0);
          `};
    ${media.lessThan('sm')`
      bottom: calc(33.5% + 0.3rem);
    `};
  }
  .vienna-image {
    position: absolute;
    left: 54.5%;
    bottom: 56%;
    transition: transform 1.5s ease-in-out 1s;
    ${({ transactions }) =>
      transactions['Vienna'].loaded
        ? css`
            ${animation(zommInOut, 2500, 0, 'ease-in-out')};
            z-index: ${transactions['Vienna'].zIndex};
          `
        : css`
            transform: translateX(-50%) scale(0);
          `};
    ${media.lessThan('sm')`
      bottom: calc(56% + 0.3rem);
    `};
  }
`
