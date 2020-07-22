import React from 'react'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

import {
  Wrapper,
  RatingWrapper,
  Heading,
  Text,
  PersonWrapper,
  // StyledImage,
  PersonTitle,
} from './testimonial.styled'
import { ImageObject, ImageBlock } from '../../types'

export interface TestimonialData {
  heading: string
  text: string
  rating: number
  person: {
    avatar?: ImageBlock
    name: string
    role: string
  }
  company: {
    name: string
    logo: ImageObject
  }
}

interface TestimonialProps {
  readonly data: TestimonialData
  readonly className?: string
  readonly active?: boolean
  readonly maxWidth: number
}

export const Testimonial = ({
  data: { heading, text, rating, person },
  className,
  active,
  maxWidth,
}: TestimonialProps) => {
  return (
    <Wrapper className={className} active={active} maxWidth={maxWidth}>
      <RatingWrapper>
        <Rater total={5} rating={rating} />
      </RatingWrapper>
      {heading ? <Heading as="h2">&ldquo;{heading}&rdquo;</Heading> : null}
      {text ? <Text>{text}</Text> : null}
      {person && person.name && person.role ? (
        <PersonWrapper>
          {/* <StyledImage image={person.avatar.src} alt={person.avatar.alt} /> */}
          <PersonTitle>
            {person.name}
            <span>{person.role}</span>
          </PersonTitle>
        </PersonWrapper>
      ) : null}
    </Wrapper>
  )
}

export default Testimonial
