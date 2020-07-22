import styled from 'styled-components'

import media from '../../styles/media'
import { $colorHeading, $colorBorder } from '../../styles/variables'

export const Card = styled.article`
  box-shadow: 0px 10px 70px rgba(18, 22, 64, 0.1);
  border-radius: 20px;
  width: 100%;
  max-width: 73rem;
  margin: 0 auto 3rem;
  display: flex;
  ${media.lessThan('mlg')`
    max-width: 63rem;
      margin-bottom: 1rem;
    `};
  ${media.lessThan('md')`
      max-width: 52rem;
      margin-bottom: 1rem;
    `};
  ${media.lessThan('sm')`
      flex-direction: column;
      align-items: center;
    `};
`

export const PercentageBlock = styled.div`
  flex: 1 0 35%;
  padding: 0 6.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${media.lessThan('mlg')`
    padding: 0 5.7rem;
  `};
  ${media.lessThan('md')`
    padding: 0 4.8rem;
    `};
  ${media.lessThan('sm')`
    padding: 3.6rem 0 2rem;
    `};
`
export const Divider = styled.div`
  background-color: ${$colorBorder};
  width: 0.1rem;
  margin: 2rem 0;

  ${media.lessThan('md')`
    height: 1px;
    width: unset;
    margin: 0 2rem;
    `};
  ${media.lessThan('sm')`
      align-self: stretch;
    `};
`

export const BenefitsBlock = styled.div`
  flex: 1 0 auto;
  margin-left: auto;
  padding: 5.5rem 7.5rem;
  ${media.lessThan('mlg')`
    padding: 5rem 6.4rem;
  `};
  ${media.lessThan('md')`
    padding: 4rem 5.3rem;
    `};
  ${media.lessThan('sm')`
    margin-left: 0;
    padding: 3rem 0;
    `};
`
export const PercentageHeading = styled.span`
  font-weight: 500;
  font-size: 6.5rem;
  line-height: 3.8rem;
  color: ${$colorHeading};
  margin-bottom: 2rem;
  ${media.lessThan('mlg')`
    font-size: 5.5rem;
    `};
  ${media.lessThan('md')`
      font-size: 4.5rem;
    `};
  ${media.lessThan('sm')`
      font-size: 5rem;
      margin-bottom: 1.5rem;
    `};
`
export const PercentageSubHeading = styled.span`
  text-transform: uppercase;
  letter-spacing: -0.01rem;
  font-weight: 500;
  font-size: 1.7rem;
  line-height: 2.6rem;
  color: #485769;
  ${media.lessThan('mlg')`
    font-size: 1.6rem;
    `};
  ${media.lessThan('md')`
      font-size: 1.4rem;
    `};
`
export const Benefit = styled.div`
  text-transform: uppercase;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 1.7rem;
  line-height: 2.6rem;
  letter-spacing: -0.01rem;
  color: #485769;
  ${media.lessThan('mlg')`
    font-size: 1.6rem;
    `};
  ${media.lessThan('md')`
    font-size: 1.4rem;
    `};

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  svg {
    height: 2.9rem;
    width: 2.9rem;
    margin-right: 2rem;

    ${media.lessThan('mlg')`
    height: 2.6rem;
    width: 2.6rem;
  `};
    ${media.lessThan('md')`
    height: 2.1rem;
    width: 2.1rem;
  `};
  }
`
