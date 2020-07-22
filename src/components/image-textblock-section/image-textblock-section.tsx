import React from 'react'
import {
  StyledSection,
  StyledContainer,
  StyledRow,
  StyledCol,
  StyledTextBlock,
  ImageWrapper,
  StyledImage,
} from './image-textblock-section.styled'

import { ImageBlock, TextBlockData } from '../../types'

export interface ImageTextBlockSectionData {
  imageBlock: ImageBlock
  textBlock: TextBlockData
}

interface ImageTextBlockSectionProps {
  readonly data: ImageTextBlockSectionData
  readonly className?: string
  readonly textPosition?: string
  readonly marginTop?: boolean
  readonly marginBottom?: boolean
}

export const ImageTextBlockSection = ({
  data: {
    imageBlock: { src, alt },
    textBlock,
  },
  className,
  textPosition = 'left',
  marginTop = false,
  marginBottom = false,
}: ImageTextBlockSectionProps) => {
  return (
    <StyledSection className={className}>
      <StyledContainer>
        <StyledRow
          reverse={textPosition === 'right'}
          justify={{ xs: 'center', sm: 'space-between' }}
        >
          <StyledCol
            align={{ xs: 'center', sm: 'stretch' }}
            xs={4}
            sm={4}
            md={6}
            lg={6}
          >
            <StyledTextBlock
              data={textBlock}
              marginTop={marginTop}
              marginBottom={marginBottom}
              textPosition={textPosition}
            />
          </StyledCol>
          <StyledCol
            align={{ xs: 'center', sm: 'stretch' }}
            xs={4}
            sm={4}
            md={6}
            lg={6}
          >
            <ImageWrapper
              className="image-wrapper"
              marginTop={marginTop}
              marginBottom={marginBottom}
            >
              <StyledImage image={src} alt={alt} textPosition={textPosition} />
            </ImageWrapper>
          </StyledCol>
        </StyledRow>
      </StyledContainer>
    </StyledSection>
  )
}

export default ImageTextBlockSection
