import styled, { css } from 'styled-components'

import {
  $colorHeading,
  $colorBorder,
  $colorPrimary,
  $white,
  $backgroundMain,
} from '../../styles/variables'

import { standardBorderRadius } from '../../styles/mixins'
import media from '../../styles/media'

import ArrowDown from '../../images/arrow-down.inline.svg'

import ListOfLocales from './list-of-locales'

export const LocaleSwitcherWrapper = styled.div`
  position: relative;
`
interface SelectedLocaleProps {
  comingSoon?: boolean
}
export const SelectedLocale = styled.div<SelectedLocaleProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${$colorHeading};
  font-size: 1.6rem;
  line-height: 2.8rem;
  text-transform: capitalize;
  ${standardBorderRadius};
  min-width: 22.8rem;
  background-color: ${$white};

  ${LocaleSwitcherWrapper}:not(:first-child) & {
    border-top: 0.1rem solid ${$colorBorder};
  }

  :hover {
    cursor: pointer;
    background: ${$backgroundMain};
  }
  ${({ comingSoon }) => css`
    ${media.lessThan('sm')`
      font-size: 1.3rem;
      min-width: ${comingSoon ? '19.8rem' : '18.8rem'};
    `};
  `};
`

export const Flag = styled.img`
  width: 2.1rem;
  height: 2.1rem;
  margin-right: 1rem;
  ${media.lessThan('sm')`
    width: 1.6rem;
    height: 1.6rem;

    ${SelectedLocale} & {
      margin-right: 0.5rem;
    }
  `};
`

interface StyledArrowDownProps {
  active?: boolean
}
export const StyledArrowDown = styled(ArrowDown)<StyledArrowDownProps>`
  width: 1.2rem;
  height: 1.2rem;
  transition: all 0.3s;
  margin-right: 1.2rem;

  transform: ${({ active }) => (active ? 'rotateX(180deg)' : 'rotateX(0)')};
  ${media.lessThan('sm')`
    width: 0.8rem;
    height: 0.8rem;
    margin-right: 1rem;
    `}
`
interface ListsWrapperProps {
  comingSoon?: boolean
}

export const ListsWrapper = styled.div<ListsWrapperProps>`
  display: flex;
  align-items: flex-start;
  width: 90vw;
  max-width: 78rem;
  max-height: 70vh;
  overflow-y: auto !important;
  margin: 0 !important;
  ${standardBorderRadius};
  background: ${$backgroundMain};
  box-shadow: 0rem 1rem 2rem rgba(0, 0, 0, 0.1);

  position: absolute;
  left: 0;
  bottom: ${({ comingSoon }) => (comingSoon ? '4.5rem' : '6.5rem')};

  ${media.lessThan('sm')`
    left: 50%;
    flex-direction: column;
    bottom: 3.2rem;
  `};
`

const listStyles = css`
  display: flex;
  flex-wrap: wrap;
  max-width: 45.6rem;
  padding: 1.2rem 0;
  list-style: none;
  background-color: ${$white};
`

const listItemsStyles = (selected, notAvailableList, comingSoon) => css`
  display: flex;
  align-items: center;
  padding: ${comingSoon ? '0.9rem 1.2rem' : '1.25rem 1.2rem'};
  flex-basis: ${selected ? '100%' : '50%'};
  background: transparent;

  :hover {
    cursor: pointer;
    background: ${notAvailableList ? '#F0F1FB' : $backgroundMain};
  }
  ${media.lessThan('sm')`
    padding: ${comingSoon ? '0.5rem 1rem' : '1.2rem 1rem'};
  `}
`

export const List = styled.ul`
  ${listStyles};
`
export const NotAvailableList = styled.ul`
  ${listStyles};
  max-width: 32rem;
  background-color: transparent;
  padding-left: 2rem;
  ${media.lessThan('sm')`
    padding-left: 0;
  `}
`

interface LocaleItemProps {
  selected?: boolean
  heading?: boolean
  notAvailableList?: boolean
  comingSoon?: boolean
}
export const LocaleItem = styled.li<LocaleItemProps>`
  ${({ selected, notAvailableList, comingSoon }) =>
    listItemsStyles(selected, notAvailableList, comingSoon)}
  ${({ heading }) =>
    heading &&
    css`
      font-weight: 500;
      font-size: 1.3rem;
      line-height: 1.4rem;
      color: #4d5560;
      ${media.lessThan('sm')`
        font-size: 1.1rem;
        line-height: 1.2rem;
      `}
    `}

  ${NotAvailableList} & {
    flex-basis: 100%;
  }
`
interface CheckMarkProps {
  selected?: boolean
  selectedCountry?: boolean
}
export const LocaleCountry = styled.span<CheckMarkProps>`
  display: inline-block;
  vertical-align: top;
  margin-right: auto;
  font-size: 1.3rem;
  line-height: 1.3rem;
  color: #272d41;
  font-weight: ${({ selected }) => (selected ? '500' : 'normal')};
  ${({ selectedCountry }) =>
    selectedCountry &&
    css`
      font-size: 1.6rem;
      line-height: 1.3rem;

      color: ${$colorHeading};
      ${media.lessThan('sm')`
        font-size: 1.3rem;
        line-height: 1.3rem;
      `}
    `}
`

interface CheckMarkProps {
  show?: boolean
}
export const CheckMark = styled.span<CheckMarkProps>`
  margin-right: 0.5rem;
  ::before {
    content: '';
    display: ${({ show }) => (show ? 'inline-block' : 'none')};
    transform: rotate(45deg);
    height: 1.8rem;
    width: 0.9rem;
    border-bottom: 0.3rem solid ${$colorPrimary};
    border-right: 0.3rem solid ${$colorPrimary};
  }
`
export const StyledListofLocales = styled(ListOfLocales)`
  flex: 1 0 auto;
`
