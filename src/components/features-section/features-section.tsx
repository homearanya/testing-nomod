import React from 'react'

import {
  StyledSection,
  StyledContainer,
  StyledRow,
  StyledCol,
  StyledTextBlock,
  StyledButton,
} from './features-section.styled'
import { TextBlockData } from '../../types'

import Features from '../features'
import { FeatureCardData } from '../feature-card'

export interface FeaturesSectionData {
  textBlock: TextBlockData
  features: FeatureCardData[]
}

interface FeaturesSectionProps {
  readonly data: FeaturesSectionData
  readonly cardMode?: number
  readonly columnsSM?: number
  readonly columnsMD?: number
  readonly featuresButton?: boolean
  readonly featuresButtonHref?: string
  readonly featuresButtonText?: string
  readonly paddingBottom?: boolean
  readonly paddingTop?: boolean
  readonly className?: string
}

export const FeaturesSection = ({
  data: { textBlock, features },
  cardMode,
  columnsSM,
  columnsMD,
  featuresButton = true,
  featuresButtonHref = '/features/',
  featuresButtonText = 'View All Features',
  paddingBottom = false,
  paddingTop = false,
  className,
}: FeaturesSectionProps) => {
  return (
    <StyledSection
      className={`features-section ${className}`}
      paddingBottom={paddingBottom}
      paddingTop={paddingTop}
    >
      <StyledContainer className="features-section-container">
        <StyledRow>
          <StyledCol align="center">
            {textBlock ? <StyledTextBlock data={textBlock} /> : null}
          </StyledCol>
        </StyledRow>
        <StyledRow>
          <StyledCol align="center">
            <Features
              data={features}
              cardMode={cardMode}
              columnsSM={columnsSM}
              columnsMD={columnsMD}
            />
          </StyledCol>
        </StyledRow>
        <StyledRow>
          <StyledCol align="center">
            {featuresButton ? (
              <StyledButton
                href={featuresButtonHref}
                name={featuresButtonText}
                className="features-button"
              />
            ) : null}
          </StyledCol>
        </StyledRow>
      </StyledContainer>
    </StyledSection>
  )
}

export default FeaturesSection
