import { createGlobalStyle } from 'styled-components'

import { $colorPrimary, $colorText } from './variables'

import GorditaMediumEot from './fonts/gordita/Gordita-Medium.eot?#iefix'
import GorditaMediumWoff2 from './fonts/gordita/Gordita-Medium.woff2'
import GorditaMediumWoff from './fonts/gordita/Gordita-Medium.woff'
import GorditaMediumTtf from './fonts/gordita/Gordita-Medium.ttf'

import GorditaMediumItalicEot from './fonts/gordita/Gordita-MediumItalic.eot?#iefix'
import GorditaMediumItalicWoff2 from './fonts/gordita/Gordita-MediumItalic.woff2'
import GorditaMediumItalicWoff from './fonts/gordita/Gordita-MediumItalic.woff'
import GorditaMediumItalicTtf from './fonts/gordita/Gordita-MediumItalic.ttf'

import GorditaLightEot from './fonts/gordita/Gordita-Light.eot?#iefix'
import GorditaLightWoff2 from './fonts/gordita/Gordita-Light.woff2'
import GorditaLightWoff from './fonts/gordita/Gordita-Light.woff'
import GorditaLightTtf from './fonts/gordita/Gordita-Light.ttf'

import GorditaBoldEot from './fonts/gordita/Gordita-Bold.eot?#iefix'
import GorditaBoldWoff2 from './fonts/gordita/Gordita-Bold.woff2'
import GorditaBoldWoff from './fonts/gordita/Gordita-Bold.woff'
import GorditaBoldTtf from './fonts/gordita/Gordita-Bold.ttf'

import GorditaBoldItalicEot from './fonts/gordita/Gordita-BoldItalic.eot?#iefix'
import GorditaBoldItalicWoff2 from './fonts/gordita/Gordita-BoldItalic.woff2'
import GorditaBoldItalicWoff from './fonts/gordita/Gordita-BoldItalic.woff'
import GorditaBoldItalicTtf from './fonts/gordita/Gordita-BoldItalic.ttf'

import GorditaBlackItalicEot from './fonts/gordita/Gordita-BlackItalic.eot?#iefix'
import GorditaBlackItalicWoff2 from './fonts/gordita/Gordita-BlackItalic.woff2'
import GorditaBlackItalicWoff from './fonts/gordita/Gordita-BlackItalic.woff'
import GorditaBlackItalicTtf from './fonts/gordita/Gordita-BlackItalic.ttf'

import GorditaBlackEot from './fonts/gordita/Gordita-Black.eot?#iefix'
import GorditaBlackWoff2 from './fonts/gordita/Gordita-Black.woff2'
import GorditaBlackWoff from './fonts/gordita/Gordita-Black.woff'
import GorditaBlackTtf from './fonts/gordita/Gordita-Black.ttf'

import GorditaItalicEot from './fonts/gordita/Gordita-Italic.eot?#iefix'
import GorditaItalicWoff2 from './fonts/gordita/Gordita-Italic.woff2'
import GorditaItalicWoff from './fonts/gordita/Gordita-Italic.woff'
import GorditaItalicTtf from './fonts/gordita/Gordita-Italic.ttf'

import GorditaLightItalicEot from './fonts/gordita/Gordita-LightItalic.eot?#iefix'
import GorditaLightItalicWoff2 from './fonts/gordita/Gordita-LightItalic.woff2'
import GorditaLightItalicWoff from './fonts/gordita/Gordita-LightItalic.woff'
import GorditaLightItalicTtf from './fonts/gordita/Gordita-LightItalic.ttf'

import GorditaRegularEot from './fonts/gordita/Gordita-Regular.eot?#iefix'
import GorditaRegularWoff2 from './fonts/gordita/Gordita-Regular.woff2'
import GorditaRegularWoff from './fonts/gordita/Gordita-Regular.woff'
import GorditaRegularTtf from './fonts/gordita/Gordita-Regular.ttf'

export default createGlobalStyle`
/* font faces */
@font-face {
    font-family: 'Gordita';
    src: url(${GorditaMediumEot});
    src: local('Gordita Medium'), local('Gordita-Medium'),
        url(${GorditaMediumEot}) format('embedded-opentype'),
        url(${GorditaMediumWoff2}) format('woff2'),
        url(${GorditaMediumWoff}) format('woff'),
        url(${GorditaMediumTtf}) format('truetype');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Gordita';
    src: url(${GorditaLightEot});
    src: local('Gordita Light'), local('Gordita-Light'),
        url(${GorditaLightEot}) format('embedded-opentype'),
        url(${GorditaLightWoff2}) format('woff2'),
        url(${GorditaLightWoff}) format('woff'),
        url(${GorditaLightTtf}) format('truetype');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Gordita';
    src: url(${GorditaBoldEot});
    src: local('Gordita Bold'), local('Gordita-Bold'),
        url(${GorditaBoldEot}) format('embedded-opentype'),
        url(${GorditaBoldWoff2}) format('woff2'),
        url(${GorditaBoldWoff}) format('woff'),
        url(${GorditaBoldTtf}) format('truetype');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Gordita';
    src: url(${GorditaMediumItalicEot});
    src: local('Gordita MediumItalic'), local('Gordita-MediumItalic'),
        url(${GorditaMediumItalicEot}) format('embedded-opentype'),
        url(${GorditaMediumItalicWoff2}) format('woff2'),
        url(${GorditaMediumItalicWoff}) format('woff'),
        url(${GorditaMediumItalicTtf}) format('truetype');
    font-weight: 500;
    font-style: italic;
}

@font-face {
    font-family: 'Gordita';
    src: url(${GorditaBoldItalicEot});
    src: local('Gordita BoldItalic'), local('Gordita-BoldItalic'),
        url(${GorditaBoldItalicEot}) format('embedded-opentype'),
        url(${GorditaBoldItalicWoff2}) format('woff2'),
        url(${GorditaBoldItalicWoff}) format('woff'),
        url(${GorditaBoldItalicTtf}) format('truetype');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'Gordita';
    src: url(${GorditaItalicEot});
    src: local('Gordita Italic'), local('Gordita-Italic'),
        url(${GorditaItalicEot}) format('embedded-opentype'),
        url(${GorditaItalicWoff2}) format('woff2'),
        url(${GorditaItalicWoff}) format('woff'),
        url(${GorditaItalicTtf}) format('truetype');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Gordita';
    src: url(${GorditaRegularEot});
    src: local('Gordita Regular'), local('Gordita-Regular'),
        url(${GorditaRegularEot}) format('embedded-opentype'),
        url(${GorditaRegularWoff2}) format('woff2'),
        url(${GorditaRegularWoff}) format('woff'),
        url(${GorditaRegularTtf}) format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Gordita';
    src: url(${GorditaBlackItalicEot});
    src: local('Gordita BlackItalic'), local('Gordita-BlackItalic'),
        url(${GorditaBlackItalicEot}) format('embedded-opentype'),
        url(${GorditaBlackItalicWoff2}) format('woff2'),
        url(${GorditaBlackItalicWoff}) format('woff'),
        url(${GorditaBlackItalicTtf}) format('truetype');
    font-weight: 900;
    font-style: italic;
}

@font-face {
    font-family: 'Gordita';
    src: url(${GorditaBlackEot});
    src: local('Gordita Black'), local('Gordita-Black'),
        url(${GorditaBlackEot}) format('embedded-opentype'),
        url(${GorditaBlackWoff2}) format('woff2'),
        url(${GorditaBlackWoff}) format('woff'),
        url(${GorditaBlackTtf}) format('truetype');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Gordita';
    src: url(${GorditaLightItalicEot});
    src: local('Gordita LightItalic'), local('Gordita-LightItalic'),
        url(${GorditaLightItalicEot}) format('embedded-opentype'),
        url(${GorditaLightItalicWoff2}) format('woff2'),
        url(${GorditaLightItalicWoff}) format('woff'),
        url(${GorditaLightItalicTtf}) format('truetype');
    font-weight: 300;
    font-style: italic;
}


/* reset / normalize */
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
    /* 16px is usually the browser's default font-size
        10px/16px = 62.5%  ---> 1rem = 10px*/
    font-size: 62.5%;

/* 768px */
    @media (max-width: 48em){
        font-size: calc(62.5% * ((48 - 22.5)/48 + 1));
    }
/* 740px */
    @media (max-width: 46.25em){
        font-size: calc(62.5% * ((46.25 - 22.5)/46.25 + 1));
    }
/* 720px */
    @media (max-width: 45em){
        font-size: calc(62.5% * ((45 - 22.5)/45 + 1));
    }
/* 700px */
    @media (max-width: 43.75em){
        font-size: calc(62.5% * ((43.75 - 22.5)/43.75 + 1));
    }
/* 680px */
    @media (max-width: 42.5em){
        font-size: calc(62.5% * ((42.5 - 22.5)/42.5 + 1));
    }
/* 660px */
    @media (max-width: 41.25em){
        font-size: calc(62.5% * ((41.25 - 22.5)/41.25 + 1));
    }
/* 640px */
    @media (max-width: 40em){
        font-size: calc(62.5% * ((40 - 22.5)/40 + 1));
    }
/* 620px */
    @media (max-width: 38.75em){
        font-size: calc(62.5% * ((38.75 - 22.5)/38.75 + 1));
    }
/* 600px */
    @media (max-width: 37.5em){
        font-size: calc(62.5% * ((37.5 - 22.5)/37.5 + 1));
    }
/* 580px */
    @media (max-width: 36.25em){
        font-size: calc(62.5% * ((36.25 - 22.5)/36.25 + 1));
    }
/* 560px */
    @media (max-width: 35em){
        font-size: calc(62.5% * ((35 - 22.5)/35 + 1));
    }
/* 540px */
    @media (max-width: 33.75em){
        font-size: calc(62.5% * ((33.75 - 22.5)/33.75 + 1));
    }
/* 520px */
    @media (max-width: 32.5em){
        font-size: calc(62.5% * ((32.5 - 22.5)/32.5 + 1));
    }
/* 500px */
    @media (max-width: 31.25em){
        font-size: calc(62.5% * ((31.25 - 22.5)/31.25 + 1));
    }
/* 480px */
    @media (max-width: 30em){
        font-size: calc(62.5% * ((30 - 22.5)/30 + 1));
    }
/* 460px */
    @media (max-width: 28.75em){
        font-size: calc(62.5% * ((28.75 - 22.5)/28.75 + 1));
    }
/* 440px */
    @media (max-width: 27.5em){
        font-size: calc(62.5% * ((27.5 - 22.5)/27.5 + 1));
    }
/* 420px */
    @media (max-width: 26.25em){
        font-size: calc(62.5% * ((26.25 - 22.5)/26.25 + 1));
    }
/* 400px */
    @media (max-width: 25em){
        font-size: calc(62.5% * ((25 - 22.5)/25 + 1));
    }
/* 380px */
    @media (max-width: 23.75em){
        font-size: calc(62.5% * ((23.75 - 22.5)/23.75 + 1));
    }
/* 360px */
    @media (max-width: 22.5em){
        font-size: 62.5%;
    }
}

body {
    font-family: "Gordita", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-weight: normal;
    color: ${$colorText};
    font-size: 1.6rem;
}

.active {
    color: ${$colorPrimary};
}

`
