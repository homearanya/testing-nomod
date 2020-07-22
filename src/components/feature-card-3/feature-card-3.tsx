import React from 'react'

import {
  StyledWrapper,
  ImageWrapper,
  StyledImage,
  TextBlockWrapper,
  StyledReadMore,
  ImageBlockWrapper,
  StyledTag,
} from './feature-card-3.styled'
import { Heading, Text } from '../feature-card/feature-card.styled'
import { FeatureCardData } from '../feature-card'

interface FeatureCard3Props {
  readonly data: FeatureCardData
}

export const FeatureCard3 = ({
  data: {
    imageBlock: { src, alt },
    textBlock: { heading, text },
    href,
  },
}: FeatureCard3Props) => {
  return (
    <>
      <span
        id={`feature-${heading?.toLowerCase()}`}
        style={{ position: 'relative', bottom: '13rem' }}
      />
      <StyledWrapper className="card-wrapper">
        <TextBlockWrapper tag={!href} className="text-block-wrapper">
          {href ? null : <StyledTag>Coming soon</StyledTag>}
          {heading ? <Heading>{heading}</Heading> : null}
          {text ? <Text className="feature-card-text">{text}</Text> : null}
        </TextBlockWrapper>
        <ImageBlockWrapper className="image-block-wrapper">
          {href ? (
            <StyledReadMore href={href} className="feature-card-read-more" />
          ) : null}
          <ImageWrapper tag={!href} className="image-wrapper">
            <StyledImage tag={!href} image={src} alt={alt} />
          </ImageWrapper>
        </ImageBlockWrapper>
      </StyledWrapper>
    </>
  )
}

export default FeatureCard3
