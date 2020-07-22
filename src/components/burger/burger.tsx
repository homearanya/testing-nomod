// Burger.js
import React from 'react'
import { StyledBurger } from './burger.styled'

interface BurgerProps {
  open: boolean
  setOpen: (arg: boolean) => void
}

const Burger = ({ open = false, setOpen }: BurgerProps) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger
