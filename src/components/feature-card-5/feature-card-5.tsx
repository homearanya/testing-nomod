import React from 'react'

import {
  StyledWrapper,
  ImageWrapper,
  StyledImage,
  TextBlockWrapper,
} from './feature-card-5.styled'
import { Heading, Text } from '../feature-card/feature-card.styled'

import { FeatureCardData } from '../feature-card'

interface FeatureCard5Props {
  readonly data: FeatureCardData
}

export const FeatureCard5 = ({
  data: {
    imageBlock: { src, alt },
    textBlock: { heading, text },
  },
}: FeatureCard5Props) => {
  return (
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

export default FeatureCard5
