import React from 'react'

import { StyledUniversalLink } from './read-more.styled'

interface ReadMoreProps {
  name?: string
  href?: string
  arrow?: boolean
  className?: string
  props?: React.HTMLAttributes<HTMLAnchorElement | HTMLParagraphElement>
}

const ReadMore = ({
  name = 'Read More',
  href,
  arrow = true,
  className = '',
  ...props
}: ReadMoreProps) => (
  <StyledUniversalLink href={href} className={className} {...props}>
    <>
      {name} {arrow ? <span>&rarr;</span> : null}
    </>
  </StyledUniversalLink>
)

export default ReadMore
