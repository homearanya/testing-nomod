import React from 'react'
import { CustomRow, CustomCol } from '../../styles/common.styled'
import {
  StyledSection,
  StyledContainer,
  StyledRow,
  StyledCol,
  StyledTextBlock,
} from './use-cases-hero-section.styled'
import { TextBlockData } from '../../types'

import UseCaseCard, { UseCase } from '../use-case-card'

export interface UseCasesHeroSectionData {
  textBlock: TextBlockData
  useCases: UseCase[]
}

interface UseCasesHeroSectionProps {
  readonly data: UseCasesHeroSectionData
  readonly className?: string
}

export const UseCasesHeroSection = ({
  data: { textBlock, useCases },
  className,
}: UseCasesHeroSectionProps) => {
  return (
    <StyledSection className={className}>
      <StyledContainer>
        <StyledRow>
          <StyledCol align="center">
            {textBlock ? <StyledTextBlock data={textBlock} /> : null}
          </StyledCol>
        </StyledRow>
        <CustomRow>
          {useCases.map((useCase, index) => (
            <CustomCol key={index} xs={4} sm={8 / 3} md={4}>
              <UseCaseCard useCase={useCase} />
            </CustomCol>
          ))}
        </CustomRow>
      </StyledContainer>
    </StyledSection>
  )
}

export default UseCasesHeroSection
