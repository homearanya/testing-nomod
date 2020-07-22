import styled from 'styled-components'
import { rgba } from 'polished'

import { $white, $colorPrimary } from '../../styles/variables'
import { absoluteCenter } from '../../styles/mixins'
import ArrowDown from '../../images/arrow-down.inline.svg'

export const StyledButton = styled.button`
  &&& {
    background: ${rgba($colorPrimary, 0.7)} none repeat scroll 0 0;
    border: 0.3rem solid transparent;
    font: inherit;
    appearance: none;
    bottom: 1rem;
    left: 2rem;
    color: ${$white};
    cursor: pointer;
    display: block;
    font-size: 2.8rem;
    line-height: 4rem;
    position: fixed;
    text-align: center;
    width: 3rem;
    height: 3rem;
    border-radius: 0.3rem;
    transition: 0.2s all;

    :hover {
      background-color: ${$white};
      color: ${$colorPrimary};
      border: 0.3rem solid ${$colorPrimary};
    }
  }
`

export const ArrowUp = styled(ArrowDown)`
  ${absoluteCenter};
  transform: translate(-50%, -50%) rotateX(180deg);
  width: 1.5rem;
  height: 1.5rem;
  fill: ${$white};

  ${StyledButton}:hover & {
    fill: ${$colorPrimary};
  }
`
