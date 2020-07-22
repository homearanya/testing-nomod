import React from 'react'

import {
  StyledWrapper,
  ImageWrapper,
  StyledImage,
  TextBlockWrapper,
  StyledReadMore,
} from './feature-card-2.styled'
import { Heading, Text } from '../feature-card/feature-card.styled'
import { FeatureCardData } from '../feature-card'

interface FeatureCard2Props {
  readonly data: FeatureCardData
}

export const FeatureCard2 = ({
  data: {
    imageBlock: { src, alt },
    textBlock: { heading, text },
    href,
  },
}: FeatureCard2Props) => {
  return (
    <StyledWrapper>
      <ImageWrapper>
        <StyledImage image={src} alt={alt} />
      </ImageWrapper>
      <TextBlockWrapper>
        {heading ? <Heading>{heading}</Heading> : null}
        {text ? <Text>{text}</Text> : null}
        {href ? <StyledReadMore href={href} /> : null}
      </TextBlockWrapper>
    </StyledWrapper>
  )
}

export default FeatureCard2
