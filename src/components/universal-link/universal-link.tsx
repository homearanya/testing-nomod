import React from 'react'

import { StyledLink, StyledAnchor } from './universal-link.styled'

export interface UniversalLinkProps {
  children?: React.ReactNode
  href?: string
  newTab?: boolean
  name?: string
  className?: string
  props?: React.HTMLAttributes<HTMLAnchorElement | HTMLParagraphElement>
}

const UniversalLink = ({
  children,
  href,
  newTab = true,
  name,
  className,
  ...props
}: UniversalLinkProps) => {
  const content = children ? children : name
  if (newTab === null) newTab = true
  return (
    <>
      {href ? (
        href.indexOf('http://') !== -1 ||
        href.indexOf('https://') !== -1 ||
        href.indexOf('mailto:') !== -1 ? (
          <StyledAnchor
            href={href}
            target={newTab ? '_blank' : '_self'}
            className={className}
            {...props}
          >
            {content}
          </StyledAnchor>
        ) : (
          <StyledLink to={href} className={className} {...props}>
            {content}
          </StyledLink>
        )
      ) : (
        <p className={className} {...props} style={{ visibility: 'hidden' }}>
          {content}
        </p>
      )}
    </>
  )
}

export default UniversalLink
