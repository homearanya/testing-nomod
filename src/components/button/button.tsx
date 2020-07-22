import React from 'react'

import { StyledUniversalLink } from './button.styled'

interface ButtonProps {
  name?: string
  href?: string
  newTab?: boolean
  className?: string
  props?: React.HTMLAttributes<HTMLAnchorElement | HTMLParagraphElement>
}

const Button = ({
  name,
  href,
  newTab = true,
  className,
  ...props
}: ButtonProps) => (
  <StyledUniversalLink
    href={href}
    newTab={newTab}
    className={className}
    {...props}
  >
    <>
      {name} <span>&rarr;</span>
    </>
  </StyledUniversalLink>
)

export default Button
