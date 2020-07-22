import styled from 'styled-components'
import { CustomContainer } from '../../styles/common.styled'
import UseCase from '../use-case'
import media from '../../styles/media'

import {
  $colorHeading,
  $white,
  $colorPrimary,
  $colorText,
  $backgroundMain,
} from '../../styles/variables'

export const StyledSection = styled.section`
  position: relative;
  margin: 9.1rem 0 2.1rem;
  padding: 4rem 0 11rem;

  ::before {
    z-index: -1;
    width: 100%;
    height: 100%;
    content: '';
    background: ${$backgroundMain};
    clip-path: polygon(0 0, 100% 25%, 100% 100%, 0% 100%);
    position: absolute;
    top: 0;
    left: 0;
  }
  ${media.lessThan('mlg')`
    margin: 5rem 0 2.1rem;
  `};
  ${media.lessThan('md')`
    padding: 4rem 0 9rem;
    margin: 4rem 0 2.1rem;
  `};
  ${media.lessThan('sm')`
    padding: 5rem 0 14rem;
  `};
`
export const StyledContainer = styled(CustomContainer)`
  ${media.lessThan('sm')`
    padding: 0 2.5rem;
  `};
`

export const CarouselWrapper = styled.div`
  display: flex;
  position: relative;
`

interface StyledUseCaseProps {
  active?: boolean
}
export const StyledUseCase = styled(UseCase)<StyledUseCaseProps>`
  transition: opacity 0.3s;
  opacity: ${({ active }) => (active ? '1' : '0')};
  width: 100%;
`

export const UseCasesMenu = styled.div`
  position: relative;
  width: 100%;
  box-shadow: 0px 0.7rem 3rem rgba(23, 35, 98, 0.08);
  background-color: ${$white};
  margin-bottom: -16rem;
  margin-top: 5rem;
  ${media.lessThan('md')`
    margin-bottom: -13.5rem;
  `};
  ${media.lessThan('sm')`
    background:none;
    margin-top: unset;
    top: unset;
    margin-left: unset;
    margin-right: unset;
    width: unset;
    padding: 2rem 0 3rem;
    box-shadow:none;
  `};
`
export const List = styled.ol`
  list-style: none;
  display: flex;
  justify-content: space-between;
  ${media.lessThan('sm')`
    justify-content: center;
  `};
`

interface ListItemProps {
  active?: boolean
}
export const ListItem = styled.li<ListItemProps>`
  color: ${({ active }) => (active ? $colorHeading : $colorText)};
  font-weight: 500;
  font-size: 2rem;
  line-height: 4.7rem;
  padding: 3.2rem 10rem 3.5rem;
  cursor: pointer;
  border-top: ${({ active }) =>
    `0.3rem solid ${active ? `${$colorPrimary}` : 'transparent'}`};

  ${({ active }) => media.lessThan('sm')`
      border-top: 0.2rem solid ${active ? `${$colorPrimary}` : '#DCDFEB'}
  `};

  :hover {
    border-top: 0.3rem solid ${$colorPrimary};
    ${media.lessThan('sm')`
      border-top-width: 0.2rem;
  `};
  }

  ${media.lessThan('xl')`
    padding: 3.2rem 5rem 3.5rem;
  `};
  ${media.lessThan('lg')`
    padding: 3.1rem 5rem;
  `};
  ${media.lessThan('mlg')`
    font-size: 1.7rem;
    padding: 2.5rem 4rem;
  `};
  ${media.lessThan('md')`
    font-size: 1.4rem;
    padding: 2.5rem 3rem;
  `};
  ${media.lessThan('sm')`
    font-size: 0.9rem;
    padding:0.1rem  1rem ;

    &:not(:last-child) {
      margin-right: 1rem;
    }

  `};
`
