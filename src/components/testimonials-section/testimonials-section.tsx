import React, { CSSProperties } from 'react'
import useMedia from 'use-media'

import { $breakpoints } from '../../styles/media'
import useCarousel from '../../utils/hooks/useCarousel'
import { TestimonialData } from '../testimonial'
import {
  StyledSection,
  StyledContainer,
  Heading,
  CarouselContainer,
  CarouselWrapper,
  StyledTestimonial,
  TestimonialsMenu,
  StyledTestimonialMenuItem,
  ListContainer,
  List,
} from './testimonials-section.styled'

export interface TestimonialsSectionData {
  readonly heading: string
  readonly testimonials: TestimonialData[]
}
interface TestimonialsSectionProps {
  readonly data: TestimonialsSectionData
}

export const TestimonialsSection = ({
  data: { heading, testimonials },
}: TestimonialsSectionProps) => {
  const isMobile = useMedia({ maxWidth: $breakpoints.sm * 16 - 1 })
  const [active, , handlers, style] = useCarousel(testimonials.length, 5000)
  const cardMaxWidth = 100 / (testimonials.length + 2)
  return (
    <StyledSection>
      <StyledContainer>
        <Heading as="h2">{heading}</Heading>
        <CarouselContainer>
          <CarouselWrapper {...handlers} style={style}>
            <StyledTestimonial
              data={testimonials[testimonials.length - 1]}
              active={active === testimonials.length - 1}
              maxWidth={cardMaxWidth}
            />
            {testimonials.map((testimonial, index) => (
              <StyledTestimonial
                key={index}
                data={testimonial}
                active={active === index}
                maxWidth={cardMaxWidth}
              />
            ))}
            <StyledTestimonial
              data={testimonials[0]}
              active={active === 0}
              maxWidth={cardMaxWidth}
            />
          </CarouselWrapper>
        </CarouselContainer>
        <TestimonialsMenu>
          <ListContainer>
            <List
              style={
                isMobile
                  ? {}
                  : {
                      width: `${(testimonials.length + 2) * 100}%`,
                      left: `-${((testimonials.length + 2) * 100) / 2}%`,
                    }
              }
            >
              <StyledTestimonialMenuItem
                data={testimonials[testimonials.length - 1]}
                style={isMobile ? {} : { visibility: 'hidden' }}
              />
              {isMobile
                ? null
                : testimonials.map((testimonial, index) => {
                    let style: CSSProperties = { visibility: 'hidden' }
                    if (index === 2 || index === 3) {
                      style = { visibility: 'visible' }
                    }
                    return (
                      <StyledTestimonialMenuItem
                        key={index}
                        data={testimonial}
                        style={style ? style : {}}
                      />
                    )
                  })}
              <StyledTestimonialMenuItem
                data={testimonials[0]}
                style={isMobile ? {} : { visibility: 'hidden' }}
              />
            </List>
          </ListContainer>
        </TestimonialsMenu>
      </StyledContainer>
    </StyledSection>
  )
}

export default TestimonialsSection
