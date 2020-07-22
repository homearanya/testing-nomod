import { generateMedia } from 'styled-media-query'

export const $maxWidth = 1920

interface Breakpoints {
  [key: string]: number
}

// in em => 1 em = 16px
export const $breakpoints: Breakpoints = {
  xs: 1, //
  sm: 48, // 768px
  md: 64, // 1024px
  lg: 85.375, // 1366px
  xl: 120, // 1920px
}

// in em => 1 em = 16px
const media = generateMedia({
  sm: '48em', // 768px
  md: '64em', // 1024px
  mlg: '80em', // 1280px
  lg: '85.375em', // 1366px
  xl: '120em', // 1920px
})

export default media
