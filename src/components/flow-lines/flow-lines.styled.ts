import styled from 'styled-components'
import media from '../../styles/media'

import { CustomContainer } from '../../styles/common.styled'

export const StyledContainer = styled(CustomContainer)``

interface WrapperProps {
  width: number
  height: number
  reverse?: boolean
}
export const Wrapper = styled.div<WrapperProps>`
  box-sizing: border-box;
  position: relative;
  margin: 0 auto;
  height: ${({ height }) => `${height / 10}rem`};
  width: ${({ width }) => `${width / 10}rem`};
  transform-origin: center center;
  transform: ${({ reverse }) => (reverse ? `RotateY(180deg)` : 'none')};

  ${media.lessThan('sm')`
    display:none;
  `};
`
interface MiddleLineProps {
  width: number
  height: number
  color: string
  top: number
  left: number
}

export const MiddleLine = styled.div<MiddleLineProps>`
  box-sizing: border-box;
  position: absolute;
  height: ${({ height }) => `${height / 10}rem`};
  width: ${({ width }) => `${width / 10}rem`};
  top: ${({ top }) => `${top / 10}rem`};
  left: ${({ left }) => `${left / 10}rem`};
  background-color: ${({ color }) => color};
`

interface SideLineProps {
  width: number
  height: number
  thickness: number
  color: string
  borderRadius: number
}

interface LeftLineProps extends SideLineProps {
  top: number
}

export const LeftLine = styled.div<LeftLineProps>`
  box-sizing: border-box;
  position: absolute;
  height: ${({ height, thickness }) => `${(height - thickness) / 10}rem`};
  width: ${({ width }) => `${width / 10}rem`};
  border-top-left-radius: ${({ borderRadius }) => `${borderRadius / 10}rem`};
  border-left: ${({ color, thickness }) =>
    `${thickness / 10}rem solid ${color}`};
  border-top: ${({ color, thickness }) =>
    `${thickness / 10}rem solid ${color}`};
  top: ${({ top }) => `${top / 10}rem`};
  left: 0;
`
export const RightLine = styled.div<SideLineProps>`
  box-sizing: border-box;
  position: absolute;
  height: ${({ height }) => `${height / 10}rem`};
  width: ${({ width }) => `${width / 10}rem`};
  border-bottom-right-radius: ${({ borderRadius }) =>
    `${borderRadius / 10}rem`};
  border-right: ${({ color, thickness }) =>
    `${thickness / 10}rem solid ${color}`};
  border-bottom: ${({ color, thickness }) =>
    `${thickness / 10}rem solid ${color}`};
  top: 0;
  right: 0;
`

interface ArrowProps {
  width: number
  thickness: number
}
export const Arrow = styled.div<ArrowProps>`
  box-sizing: border-box;
  position: absolute;
  height: ${({ width }) => `${width / 10}rem`};
  width: ${({ width }) => `${width / 10}rem`};
  border-right: ${({ color, thickness }) =>
    `${thickness / 10}rem solid ${color}`};
  border-bottom: ${({ color, thickness }) =>
    `${thickness / 10}rem solid ${color}`};
  top: ${({ width }) => `calc(100% - ${width / 10}rem)`};
  right: ${({ thickness }) => `calc(100% - ${thickness / 20}rem)`};
  transform-origin: bottom right;
  transform: rotate(45deg);
`
