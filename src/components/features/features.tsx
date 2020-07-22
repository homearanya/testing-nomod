import React from 'react'

import {
  StyledRow,
  StyledCol,
  StyledFeatureCard,
  StyledFeatureCard2,
  StyledFeatureCard3,
  StyledFeatureCard4,
  StyledFeatureCard5,
} from './features.styled'

import { FeatureCardData } from '../feature-card'

interface FeaturesProps {
  readonly data: FeatureCardData[]
  readonly cardMode?: number
  readonly columnsSM?: number
  readonly columnsMD?: number
}

export const Features = ({
  data: features,
  cardMode,
  columnsSM = 8 / 3,
  columnsMD = 4,
}: FeaturesProps) => {
  return (
    <StyledRow justify="center" className="feature-cards">
      {features
        ? features.map((feature, index) => (
            <StyledCol
              key={index}
              xs={4}
              sm={columnsSM}
              md={columnsMD}
              align="center"
            >
              {cardMode === 5 ? (
                <StyledFeatureCard5 data={feature} />
              ) : cardMode === 4 ? (
                <StyledFeatureCard4 data={feature} />
              ) : cardMode === 3 ? (
                <StyledFeatureCard3 data={feature} />
              ) : cardMode === 2 ? (
                <StyledFeatureCard2 data={feature} />
              ) : (
                <StyledFeatureCard data={feature} />
              )}
            </StyledCol>
          ))
        : null}
    </StyledRow>
  )
}

export default Features
