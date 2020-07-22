// FlowLines.js
import React from 'react'
import {
  StyledContainer,
  Wrapper,
  LeftLine,
  MiddleLine,
  RightLine,
  Arrow,
} from './flow-lines.styled'
import { $colorPrimary } from '../../styles/variables'

interface FlowLinesProps {
  width?: number
  height?: number
  thickness?: number
  bendWidth?: number
  color?: string
  borderRadius?: number
  reverse?: boolean
}

const FlowLines = ({
  width = 500,
  height = 600,
  thickness = 7,
  bendWidth = 100,
  color = $colorPrimary,
  borderRadius = 70,
  reverse = false,
}: FlowLinesProps) => {
  const sideLinesHeight = Math.floor((height - thickness) / 2 + thickness)
  const middleLineWidth = width - 2 * bendWidth
  const middleLineTop = Math.floor((height - thickness) / 2)
  const leftLineTop = Math.floor((height - thickness) / 2)
  return (
    <StyledContainer>
      <Wrapper reverse={reverse} width={width} height={height}>
        <LeftLine
          width={bendWidth}
          height={sideLinesHeight}
          thickness={thickness}
          color={color}
          borderRadius={borderRadius}
          top={leftLineTop}
        />
        <MiddleLine
          width={middleLineWidth}
          height={thickness}
          top={middleLineTop}
          left={bendWidth}
          color={color}
        />
        <RightLine
          width={bendWidth}
          height={sideLinesHeight}
          thickness={thickness}
          color={color}
          borderRadius={borderRadius}
        />
        <Arrow width={30} thickness={thickness} color={color} />
      </Wrapper>
    </StyledContainer>
  )
}

export default FlowLines
