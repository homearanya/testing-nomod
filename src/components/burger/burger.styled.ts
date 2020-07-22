import styled from 'styled-components'
import media from '../../styles/media'
import { $colorHeading } from '../../styles/variables'

interface StyledBurgerProps {
  open: boolean
}

export const StyledBurger = styled.button<StyledBurgerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 2.5rem;
  height: 1.8rem;
  appearance: none;
  background: transparent;
  border: none;
  font: inherit;
  cursor: pointer;
  margin-right: 1rem;

  ${media.greaterThan('md')`
    width: 2rem;
    height: 14.5rem;
    display: none;
  `};

  &:focus {
    outline: 0;
  }

  div {
    background-color: ${$colorHeading};
    width: 2.5rem;
    height: 0.2rem;
    border-radius: 1rem;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 0.1rem;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(2rem)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`
