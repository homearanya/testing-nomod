// import original module declaration
// and extend it
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    awesomegrid: {
      mediaQuery: string
      columns: {
        xs: number
        sm: number
        md: number
        lg: number
        xl: number
      }
      gutterWidth: {
        xs: number
        sm: number
        md: number
        lg: number
        xl: number
      }
      paddingWidth: {
        xs: number
        sm: number
        md: number
        lg: number
        xl: number
      }
      container: {
        xs: string | number
        sm: string | number
        md: string | number
        lg: string | number
        xl: string | number
      }
      // 1 rem: 16px
      breakpoints: {
        xs: number
        sm: number
        md: number
        lg: number
        xl: number
      }
    }
  }
}
