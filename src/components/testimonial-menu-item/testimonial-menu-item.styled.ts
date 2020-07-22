import styled from 'styled-components'

import media from '../../styles/media'
import { $yellow, $colorText } from '../../styles/variables'
import Image from '../image'

interface ListItemProps {
  active?: boolean
}
export const ListItem = styled.li<ListItemProps>`
  flex: 1 1 auto;
  display: flex;
  font-weight: 500;
  font-size: 2rem;
  line-height: 4.7rem;
  padding: 3.5rem 3rem;
  margin: 0 2rem;
  border: 0.1rem solid #c8c8c8;
  border-radius: 1rem;
  /* cursor: pointer; */
  box-shadow: ${({ active }) =>
    active ? '0px 1rem 5rem rgba(0, 0, 0, 0.15)' : 'none'};
  transition: box-shadow 0.3s;

  :hover {
    /* box-shadow: 0px 1rem 5rem rgba(0, 0, 0, 0.15); */
  }

  ${media.lessThan('md')`
    margin: 0 1rem;
    padding: 2.5rem 2rem;
  `};
  ${media.lessThan('sm')`
    width: 100%;
    max-width: 55rem;
    padding: 1.5rem 2rem;
  `};
`

export const RatingArea = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: center;
  font-size: 2.3rem;
  padding-right: 5rem;

  .react-rater {
    text-align: center;
  }
  .react-rater-star {
    font-size: 2.3rem;
    ${media.lessThan('sm')`
    font-size: 1.9rem;
  `};
  }
  .react-rater-star.is-active {
    color: ${$yellow};
  }
  .react-rater-star.is-active-half::before {
    color: ${$yellow};
  }

  ${media.lessThan('mlg')`
    font-size: 1.8rem;
    padding-right: 2rem;
  `};
  ${media.lessThan('md')`
    font-size: 1.3rem;
    padding-right: 1.5rem;
  `};
`
export const RatingWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  font-weight: 500;
  font-size: 3.4rem;
  line-height: 1;
  color: ${$colorText};
  margin-bottom: 1.3rem;
  span {
    display: flex;
    font-size: 2.6rem;
    color: ${$colorText};
    align-items: flex-end;
  }
  ${media.lessThan('mlg')`
    font-size: 2.3rem;
    margin-bottom: 1rem;
    span {
      font-size: 1.6rem;
    }    
  `};
  ${media.lessThan('md')`
    font-size: 1.6rem;
    margin-bottom: 1rem;
    span {
      font-size: 1.2rem;
    }    
  `};
  ${media.lessThan('md')`
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    span {
      font-size: 1.5rem;
    }    
  `};
`
export const LogoWrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  align-content: center;
  justify-content: center;
  margin-left: auto;
  border-left: 0.1rem solid #c8c8c8;
  padding-left: 0rem;
`
export const CompanyLogo = styled(Image)`
  display: inline-block;
  width: 70%;
  height: auto;
`
