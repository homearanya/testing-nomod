import React from 'react'

import {
  Wrapper,
  Icon,
  Heading,
  Text,
  StoreBadgesWrapper,
  StyledUniversalLink,
  StyledAppleStoreBadge,
  StyledGooglePlayBadge,
} from './text-block.styled'
import { TextBlockData } from '../../types'

interface TextBlockProps {
  readonly data: TextBlockData
  readonly className?: string
  readonly props?: React.HTMLAttributes<HTMLDivElement>
}

export const TextBlock = ({ data, className, ...props }: TextBlockProps) => {
  const {
    icon,
    heading,
    headingTag = 'h1',
    text,
    paragraphs,
    align = 'left',
    storeButtons = false,
  } = data
  return (
    <Wrapper align={align} className={`text-block ${className}`} {...props}>
      {icon ? <Icon image={icon} className="icon" /> : null}
      {heading ? (
        <Heading as={headingTag} className="heading">
          {heading}
        </Heading>
      ) : null}
      {text ? (
        <Text
          align={align}
          className="text text-0 last"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      ) : null}
      {paragraphs
        ? paragraphs.map((paragraph, index) => (
            <Text
              key={index}
              align={align}
              className={
                index === paragraphs.length - 1
                  ? 'text last'
                  : `text text-${index}`
              }
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))
        : null}
      {storeButtons ? (
        <StoreBadgesWrapper align={align} className="badges">
          <StyledUniversalLink href="https://apps.apple.com/us/app/nomod/id1497279930">
            <StyledAppleStoreBadge className="apple-store-badge" />
          </StyledUniversalLink>
          <StyledUniversalLink href="https://play.google.com/store/apps/details?id=com.nomod">
            <StyledGooglePlayBadge className="google-play-badge" />
          </StyledUniversalLink>
        </StoreBadgesWrapper>
      ) : null}
    </Wrapper>
  )
}

export default TextBlock
