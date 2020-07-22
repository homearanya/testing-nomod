import React from 'react'

import {
  ImageWrapper,
  StyledImage,
  TextBlockWrapper,
  StyledRow,
  Heading,
  Text,
} from './feature-card-4.styled'
import { FeatureCardData } from '../feature-card'
interface FeatureCard4Props {
  readonly data: FeatureCardData
}

export const FeatureCard4 = ({
  data: {
    imageBlock: { src, alt },
    textBlock: { heading, text },
    textLeft = true,
  },
}: FeatureCard4Props) => {
  return (
    <StyledRow textLeft={textLeft}>
      <TextBlockWrapper textLeft={textLeft}>
        {heading ? <Heading>{heading}</Heading> : null}
        {text ? <Text>{text}</Text> : null}
        <ImageWrapper>
          <StyledImage image={src} alt={alt} textLeft={textLeft} />
        </ImageWrapper>
      </TextBlockWrapper>
    </StyledRow>
  )
}

export default FeatureCard4
