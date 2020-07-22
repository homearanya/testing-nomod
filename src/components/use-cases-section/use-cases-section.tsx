import React from 'react'
import useMedia from 'use-media'

import { $breakpoints } from '../../styles/media'
import useCarousel from '../../utils/hooks/useCarousel'
import { UseCaseData } from '../use-case'
import {
  StyledSection,
  StyledContainer,
  CarouselWrapper,
  StyledUseCase,
  UseCasesMenu,
  List,
  ListItem,
} from './use-cases-section.styled'

interface UseCasesSectionProps {
  readonly data: UseCaseData[]
}

export const UseCasesSection = ({ data: useCases }: UseCasesSectionProps) => {
  const isMobile = useMedia({ maxWidth: $breakpoints.sm * 16 - 1 })
  const [active, setActive, handlers, style] = useCarousel(
    useCases.length,
    5000,
  )
  return (
    <StyledSection>
      <StyledContainer>
        <div style={{ overflow: 'hidden' }}>
          <CarouselWrapper {...handlers} style={style}>
            <StyledUseCase
              data={useCases[useCases.length - 1]}
              active={active === useCases.length - 1}
            />
            {useCases.map((useCase, index) => (
              <StyledUseCase
                key={index}
                data={useCase}
                active={active === index}
              />
            ))}
            <StyledUseCase data={useCases[0]} active={active === 0} />
          </CarouselWrapper>
        </div>
        <UseCasesMenu>
          <List>
            {useCases.map((useCase, index) => (
              <ListItem
                key={index}
                onClick={() => setActive(index)}
                active={active === index}
              >
                {isMobile ? null : useCase.useCase}
              </ListItem>
            ))}
          </List>
        </UseCasesMenu>
      </StyledContainer>
    </StyledSection>
  )
}

export default UseCasesSection
