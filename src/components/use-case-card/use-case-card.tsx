import React from 'react'
import useMedia from 'use-media'

import { $breakpoints } from '../../styles/media'
import {
  StyledLink,
  StyledWrapper,
  ImageWrapper,
  StyledImage,
  TextBlockWrapper,
  Heading,
  Text,
} from './use-case-card.styled'
import { ImageBlock } from '../../types'

export interface UseCase {
  imageBlock: ImageBlock
  heading?: string
  text?: string
  href?: string
}

interface UseCaseCardProps {
  readonly useCase: UseCase
  readonly className?: string
}

const UseCaseCard = ({
  useCase: {
    imageBlock: { src, srcSmall, alt },
    heading,
    text,
    href = '',
  },
  className,
}: UseCaseCardProps) => {
  const isMobile = useMedia({ maxWidth: $breakpoints.sm * 16 - 1 })
  return (
    <StyledWrapper className={className}>
      {href ? (
        <StyledLink to={href}>
          <ImageWrapper>
            <StyledImage
              image={isMobile && srcSmall ? srcSmall : src}
              alt={alt}
            />
          </ImageWrapper>
          <TextBlockWrapper>
            {heading ? <Heading>{heading}</Heading> : null}
            {text ? <Text>{text}</Text> : null}
          </TextBlockWrapper>
        </StyledLink>
      ) : (
        <>
          <ImageWrapper>
            <StyledImage
              image={isMobile && srcSmall ? srcSmall : src}
              alt={alt}
            />
          </ImageWrapper>
          <TextBlockWrapper>
            {heading ? <Heading>{heading}</Heading> : null}
            {text ? <Text>{text}</Text> : null}
          </TextBlockWrapper>
        </>
      )}
    </StyledWrapper>
  )
}

export default UseCaseCard
