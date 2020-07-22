import React from 'react'
import useMedia from 'use-media'

import { $breakpoints } from '../../styles/media'
import { CustomContainer } from '../../styles/common.styled'
import { TextBlockData } from '../../types'
import { Testimonial2Data } from '../testimonial-2'
import {
  StyledSection,
  StyledContainer,
  StyledRow,
  StyledTestimonial,
} from './testimonials-section-2.styled'
import TextBlock from '../text-block'

export interface TestimonialsSection2Data {
  readonly textBlock: TextBlockData
  readonly testimonials: Testimonial2Data[]
}
interface TestimonialsSection2Props {
  readonly data: TestimonialsSection2Data
  readonly cardMaxWidth?: number
  readonly gutterWidth?: number
  readonly numberRows?: number
}

export const TestimonialsSection2 = ({
  data: { textBlock, testimonials },
  cardMaxWidth = 400,
  gutterWidth = 70,
  numberRows = 2,
}: TestimonialsSection2Props) => {
  const isMobile = useMedia({ maxWidth: $breakpoints.sm * 16 - 1 })
  if (isMobile) {
    cardMaxWidth = 180
    gutterWidth = 60
  }
  const containerWidth =
    Math.ceil(testimonials.length / numberRows) * (cardMaxWidth + gutterWidth)
  const firstMarginLeft = (cardMaxWidth + gutterWidth * 2) / 2
  return (
    <StyledSection>
      <CustomContainer>
        <TextBlock data={textBlock} />
      </CustomContainer>
      <StyledContainer
        containerWidth={containerWidth}
        firstMarginLeft={firstMarginLeft}
      >
        <StyledRow firstMarginLeft={firstMarginLeft}>
          {testimonials.map((testimonial, index) => (
            <StyledTestimonial
              key={index}
              data={testimonial}
              cardMaxWidth={cardMaxWidth}
              gutterWidth={gutterWidth}
            />
          ))}
        </StyledRow>
      </StyledContainer>
    </StyledSection>
  )
}

export default TestimonialsSection2
