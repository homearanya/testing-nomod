import React from 'react'

import {
  StyledRow,
  StyledCol,
  Heading,
  Text,
  StyledReadMore,
  ImageWrapper,
  StyledImage,
  StyledCard,
} from './use-case.styled'
import { ImageBlock } from '../../types'

export interface UseCaseData {
  useCase: string
  heading: string
  text: string
  href: string
  imageBlock: ImageBlock
  popup: ImageBlock
}

interface UseCaseProps {
  readonly data: UseCaseData
  readonly className?: string
}

export const UseCase = ({
  data: { heading, text, href, imageBlock, popup },
  className,
}: UseCaseProps) => {
  return (
    <div className={className}>
      <StyledRow align="center" justify="space-between">
        <StyledCol xs={4} sm={4} md={6}>
          <ImageWrapper>
            <StyledImage image={imageBlock.src} alt={imageBlock.alt} />
            <StyledCard image={popup.src} alt={popup.alt} />
          </ImageWrapper>
        </StyledCol>
        <StyledCol xs={4} sm={4} md={6}>
          {heading ? <Heading as="h2">{heading}</Heading> : null}
          {text ? <Text>{text}</Text> : null}
          {href ? <StyledReadMore name="Read More" href={href} /> : null}
        </StyledCol>
      </StyledRow>
    </div>
  )
}

export default UseCase
