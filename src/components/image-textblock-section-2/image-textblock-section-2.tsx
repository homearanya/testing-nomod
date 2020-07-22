import React from 'react'
import {
  StyledSection,
  StyledContainer,
  StyledRow,
  StyledCol,
  StyledTextBlock,
  ImageWrapper,
  StyledImage,
} from './image-textblock-section-2.styled'

import { ImageBlock, TextBlockData } from '../../types'

export interface ImageTextBlockSection2Data {
  imageBlock: ImageBlock
  textBlock: TextBlockData
}

interface ImageTextBlockSection2Props {
  readonly data: ImageTextBlockSection2Data
  readonly className?: string
  readonly textPosition?: string
  readonly paddingTop?: boolean
  readonly paddingBottom?: boolean
}

export const ImageTextBlockSection2 = ({
  data: {
    imageBlock: { src, alt },
    textBlock,
  },
  className,
  textPosition = 'left',
  paddingTop = false,
  paddingBottom = false,
}: ImageTextBlockSection2Props) => {
  return (
    <StyledSection
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      className={className}
    >
      <StyledContainer>
        <StyledRow
          reverse={textPosition === 'right'}
          justify={{ xs: 'center' }}
          align={{ xs: 'center' }}
        >
          <StyledCol align={{ xs: 'center' }} xs={4} sm={4} md={6} lg={6}>
            <StyledTextBlock data={textBlock} textPosition={textPosition} />
          </StyledCol>
          <StyledCol align={{ xs: 'center' }} xs={4} sm={4} md={6} lg={6}>
            <ImageWrapper textPosition={textPosition} className="image-wrapper">
              <StyledImage image={src} alt={alt} textPosition={textPosition} />
            </ImageWrapper>
          </StyledCol>
        </StyledRow>
      </StyledContainer>
    </StyledSection>
  )
}

export default ImageTextBlockSection2
