import React from 'react'

import {
  StyledSection,
  StyledContainer,
  StyledRow,
  StyledCol,
  StyledTextBlock,
  ImageWrapper,
  StyledImage,
  StyledStripeBadge,
} from './download-section.styled'

import EmailForm, { EmailFormData } from '../email-form'
import { ImageBlock, TextBlockData } from '../../types'
import useWindowSize from '../../utils/hooks/useWindowSize'
export interface DownloadSectionData {
  imageBlock: ImageBlock
  textBlock: TextBlockData
  emailForm?: EmailFormData
}

interface DownloadSectionProps {
  readonly data: DownloadSectionData
  readonly className?: string
  readonly imageComponent?: JSX.Element
  readonly background?: string
  readonly handlerShowSignUp?: (e: HTMLInputElement | null) => void
  readonly handlerSetUnfocus?: () => void
  readonly setFocus?: boolean
  readonly borderTop?: boolean
  readonly borderBottom?: boolean
  readonly stripeBadge?: boolean
}

export const DownloadSection = ({
  data: { imageBlock, textBlock, emailForm },
  background,
  handlerShowSignUp,
  handlerSetUnfocus,
  setFocus = false,
  borderTop = false,
  borderBottom = false,
  className,
  imageComponent,
  stripeBadge = false,
}: DownloadSectionProps) => {
  const windowSize = useWindowSize()
  let src, alt
  if (imageBlock) {
    src = imageBlock.src
    alt = imageBlock.alt
  }
  const ImageComponent = imageComponent ? imageComponent : null
  return (
    <StyledSection background={background} className={className}>
      <StyledContainer>
        <StyledRow
          justify={{ xs: 'center', sm: 'space-between' }}
          borderBottom={borderBottom}
          borderTop={borderTop}
        >
          <StyledCol
            align={{ xs: 'center', sm: 'stretch' }}
            xs={4}
            sm={4}
            md={6}
            lg={6}
          >
            <StyledTextBlock
              windowWidth={windowSize.width}
              data={textBlock}
              className="text-block"
            />
            {emailForm && emailForm.buttonText && handlerShowSignUp ? (
              <EmailForm
                handlerShowSignUp={handlerShowSignUp}
                handlerSetUnfocus={handlerSetUnfocus}
                setFocus={setFocus}
                data={{
                  introText: emailForm.introText,
                  textPlaceholder: emailForm.textPlaceholder,
                  buttonText: emailForm.buttonText,
                }}
                border
              />
            ) : null}
          </StyledCol>
          <StyledCol
            align={{ xs: 'center', sm: 'stretch' }}
            xs={4}
            sm={4}
            md={6}
            lg={6}
          >
            <ImageWrapper className="image-wrapper">
              {ImageComponent ? (
                ImageComponent
              ) : src ? (
                <StyledImage image={src} alt={alt} />
              ) : null}
            </ImageWrapper>
          </StyledCol>
        </StyledRow>
        <StyledRow>
          <StyledCol align="center">
            {stripeBadge ? (
              <StyledStripeBadge className="stripe-badge" />
            ) : null}
          </StyledCol>
        </StyledRow>
      </StyledContainer>
    </StyledSection>
  )
}

export default DownloadSection
