import React from 'react'
import ScrollToTop from 'react-scroll-up'

import { StyledButton, ArrowUp } from './scroll-to-top.styled'

export default function ScrollUp() {
  return (
    <ScrollToTop showUnder={160}>
      <StyledButton>
        <ArrowUp />
      </StyledButton>
    </ScrollToTop>
  )
}
