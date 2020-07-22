import React from 'react'

import {
  StyledLink,
  StyledWrapper,
  ImageWrapper,
  StyledImage,
  TextBlockWrapper,
  Heading,
  Text,
} from './feature-card.styled'
import { ImageBlock, TextBlockData } from '../../types'

export interface FeatureCardData {
  imageBlock: ImageBlock
  textBlock: TextBlockData
  href?: string
  textLeft?: boolean
}

interface FeatureCardProps {
  readonly data: FeatureCardData
}

export const FeatureCard = ({
  data: {
    imageBlock: { src, alt },
    textBlock: { heading, text },
    href,
  },
}: FeatureCardProps) => {
  return href ? (
    <StyledLink to={href}>
      <StyledWrapper>
        <ImageWrapper>
          <StyledImage image={src} alt={alt} />
        </ImageWrapper>
        <TextBlockWrapper>
          {heading ? <Heading>{heading}</Heading> : null}
          {text ? <Text>{text}</Text> : null}
        </TextBlockWrapper>
      </StyledWrapper>
    </StyledLink>
  ) : (
    <StyledWrapper>
      <ImageWrapper>
        <StyledImage image={src} alt={alt} />
      </ImageWrapper>
      <TextBlockWrapper>
        {heading ? <Heading>{heading}</Heading> : null}
        {text ? <Text>{text}</Text> : null}
      </TextBlockWrapper>
    </StyledWrapper>
  )
}

export default FeatureCard
