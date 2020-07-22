import React from 'react'
import 'react-rater/lib/react-rater.css'
import dateformat from 'dateformat'

import {
  Wrapper,
  Text,
  PersonWrapper,
  ImageWrapper,
  StyledImage,
  PersonTitle,
} from './testimonial-2.styled'
import { ImageBlock } from '../../types'

export interface Testimonial2Data {
  person: {
    avatar: ImageBlock
    name: string
    backgroundColor?: string
  }
  text: string
  date: string
}

interface Testimonial2Props {
  readonly data: Testimonial2Data
  readonly className?: string
  readonly cardMaxWidth: number
  readonly gutterWidth: number
}

const Testimonial2 = ({
  data: { text, person, date },
  className,
  cardMaxWidth,
  gutterWidth,
}: Testimonial2Props) => {
  const formatedDate = dateformat(new Date(date), 'mmm dd, yyyy')
  return (
    <Wrapper
      className={className}
      cardMaxWidth={cardMaxWidth}
      gutterWidth={gutterWidth}
    >
      {person && person.avatar && person.avatar.src ? (
        <PersonWrapper>
          <ImageWrapper backgroundColor={person.backgroundColor}>
            <StyledImage image={person.avatar.src} alt={person.avatar.alt} />
          </ImageWrapper>
          <PersonTitle>
            {person.name}
            <span>{formatedDate}</span>
          </PersonTitle>
        </PersonWrapper>
      ) : null}
      {text ? <Text>{text}</Text> : null}
    </Wrapper>
  )
}

export default Testimonial2
