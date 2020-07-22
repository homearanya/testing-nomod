import React from 'react'
import useMedia from 'use-media'

import { $breakpoints } from '../../styles/media'
import {
  StyledSection,
  StyledContainer,
  StyledRow,
  StyledCol,
  StyledStripeBadge,
  StyledTextBlock,
  ImageWrapper,
  StyledImage,
} from './hero-section.styled'

import { ImageBlock, TextBlockData } from '../../types'

export interface HeroSectionData {
  imageBlock: ImageBlock
  textBlock: TextBlockData
}

interface HeroSectionProps {
  readonly data: HeroSectionData
  readonly className?: string
  readonly imageComponent?: JSX.Element
  readonly borderBottom?: boolean
  readonly stripeBadge?: boolean
}

export const HeroSection = ({
  data: { imageBlock, textBlock },
  borderBottom = false,
  className,
  imageComponent,
  stripeBadge = true,
}: HeroSectionProps) => {
  const isMobile = useMedia({ maxWidth: $breakpoints.sm * 16 - 1 })
  let src, srcSmall, alt
  if (imageBlock) {
    src = imageBlock.src
    srcSmall = imageBlock.srcSmall
    alt = imageBlock.alt
  }
  const ImageComponent = imageComponent ? imageComponent : null
  return (
    <StyledSection className={`hero-section ${className}`}>
      <StyledContainer>
        <StyledRow>
          <StyledCol align="center">
            {stripeBadge ? (
              <StyledStripeBadge className="stripe-badge" />
            ) : null}
          </StyledCol>
        </StyledRow>
        <StyledRow>
          <StyledCol align="center">
            <StyledTextBlock data={textBlock} />
          </StyledCol>
        </StyledRow>
        <StyledRow>
          <StyledCol align="center">
            <ImageWrapper className="image-wrapper" borderBottom={borderBottom}>
              {src ? (
                <StyledImage
                  image={isMobile && srcSmall ? srcSmall : src}
                  alt={alt}
                />
              ) : ImageComponent ? (
                ImageComponent
              ) : null}
            </ImageWrapper>
          </StyledCol>
        </StyledRow>
      </StyledContainer>
    </StyledSection>
  )
}

export default HeroSection
