import React from 'react'

import styled from 'styled-components'
import { $colorPrimary } from '../styles/variables'

interface TagProps {
  children?: React.ReactNode
  className?: string
}

const Tag = ({ children = 'Coming Soon', className }: TagProps) => {
  return <Wrapper className={className}>{children}</Wrapper>
}

export default Tag

export const Wrapper = styled.span`
  display: flex;
  align-items: center;
  color: ${$colorPrimary};
  text-transform: uppercase;
  font-weight: 500;
  font-size: 0.7rem;
  line-height: 2rem;
  letter-spacing: -0.01rem;
  padding: 0 0.8rem;
  border-radius: 0.5rem;
  background-color: #edf0ff;
`
