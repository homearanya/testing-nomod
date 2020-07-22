import React from 'react'

import {
  StyledContainer,
  StyledRow,
  StyledCol,
  StyledTextBlock,
} from './subheader.styled'
import { TextBlockData } from '../../types'

export interface SubheaderData {
  textBlock: TextBlockData
}

interface SubheaderProps {
  readonly data: SubheaderData
  readonly className?: string
}

export const Subheader = ({
  data: { textBlock },
  className,
}: SubheaderProps) => {
  return (
    <StyledContainer
      className={`subheader-container${className ? ` ${className}` : ''}`}
    >
      <StyledRow>
        <StyledCol align="center">
          {textBlock ? <StyledTextBlock data={textBlock} /> : null}
        </StyledCol>
      </StyledRow>
    </StyledContainer>
  )
}

export default Subheader
