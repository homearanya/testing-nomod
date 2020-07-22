import styled from 'styled-components'
import {
  CustomContainer,
  CustomRow,
  CustomCol,
} from '../../styles/common.styled'
import media from '../../styles/media'

import TextBlock from '../text-block'
import Button from '../button'

export const StyledSection = styled.section`
  padding: 6rem 0 7rem;
  ${media.lessThan('mlg')`
    padding: 4rem 0 5rem;
  `};
  ${media.lessThan('sm')`
    padding: 5rem 0;
  `};
`
export const StyledContainer = styled(CustomContainer)`
  max-width: 120.7rem;
  margin: 0 auto;
`
export const StyledRow = styled(CustomRow)``
export const StyledCol = styled(CustomCol)``
export const StyledTextBlock = styled(TextBlock)`
  max-width: 120rem;
  margin: 0 auto;

  .heading {
    ${media.lessThan('sm')`
      margin-bottom: 4rem;
  `};
  .text.last {
    ${media.lessThan('sm')`
      margin-bottom: 4rem;
  `};
  }
`
export const StyledButton = styled(Button)`
  margin-top: 6rem;
`
