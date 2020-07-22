import React from 'react'
import StripeBadgeIcon from '../../images/stripe-badge.inline.svg'
import { StyledAnchor } from './stripe-badge.styled'

interface StripeBadgeProps {
  props?: React.HTMLAttributes<HTMLAnchorElement>
  className?: string
}

const StripeBadge = ({ className, ...props }: StripeBadgeProps) => (
  <StyledAnchor
    {...props}
    href="https://stripe.com/accept-payments/nomod" // provisional
    target="_blank"
    rel="noopener noreferrer"
    className={className}
  >
    <StripeBadgeIcon />
  </StyledAnchor>
)

export default StripeBadge
