// FeaturesImage.js
import React from 'react'

import GreenCheckMark from '../../images/green-checkmark.inline.svg'

import {
  Card,
  BenefitsBlock,
  Benefit,
  PercentageBlock,
  PercentageHeading,
  PercentageSubHeading,
  Divider,
} from './pricing-image.styled'

export interface PricingImageData {
  percentage: number
  benefits: string[]
}
interface PricingImageProps {
  data: PricingImageData
}

const PricingImage = ({
  data: { percentage, benefits },
}: PricingImageProps) => (
  <Card>
    <PercentageBlock>
      <PercentageHeading>{`${percentage}%`}</PercentageHeading>
      <PercentageSubHeading>Per Charge</PercentageSubHeading>
    </PercentageBlock>
    <Divider />
    <BenefitsBlock>
      {benefits.map(benefit => (
        <Benefit key={benefit}>
          <GreenCheckMark />
          {benefit}
        </Benefit>
      ))}
    </BenefitsBlock>
  </Card>
)

export default PricingImage
