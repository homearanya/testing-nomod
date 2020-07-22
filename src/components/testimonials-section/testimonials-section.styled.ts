import styled from 'styled-components'
import { CustomContainer } from '../../styles/common.styled'

import Testimonial from '../testimonial'
import TestimonialMenuItem from '../testimonial-menu-item'

import media from '../../styles/media'
import { MainHeading } from '../../styles/common.styled'

export const StyledSection = styled.section`
  padding-top: 13.5rem;
  overflow: hidden;
  ${media.lessThan('xl')`
    padding-top: 10.5rem;
  `};
  ${media.lessThan('lg')`
    padding-top: 10.5rem;
  `};
  ${media.lessThan('mlg')`
    padding-top: 10.5rem;
  `};
  ${media.lessThan('md')`
    padding-top: 7.5rem;
  `};
  ${media.lessThan('sm')`
    padding-top: 2rem;
  `};
`
export const StyledContainer = styled(CustomContainer)`
  overflow: hidden;
`

export const Heading = styled(MainHeading)`
  text-align: center;
  margin-bottom: 12rem;
  ${media.lessThan('xl')`
    margin-bottom: 7rem;
  `};
  ${media.lessThan('md')`
    margin-bottom: 5rem;
  `};
  ${media.lessThan('sm')`
    margin-bottom: 4.5rem;
  `};
`
export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  margin-bottom: 8.5rem;
  ${media.lessThan('mlg')`
    margin-bottom: 7rem;
  `};
  ${media.lessThan('sm')`
    margin-bottom: 4.5rem;
  `};
`

export const CarouselWrapper = styled.div`
  display: flex;
  display: space-between;
  position: relative;
`

interface StyledTestimonialProps {
  active?: boolean
}
export const StyledTestimonial = styled(Testimonial)<StyledTestimonialProps>``

export const TestimonialsMenu = styled.div`
  padding-bottom: 7.5rem;
  ${media.lessThan('sm')`
    padding-bottom: 3rem;
  `};
`
export const ListContainer = styled.div`
  width: 100%;
  max-width: 50rem;
  margin: 0 auto;
  margin-bottom: 2rem;
`

export const List = styled.ol`
  position: relative;
  list-style: none;
  display: flex;
  justify-content: space-between;
  ${media.lessThan('sm')`
    flex-direction: column;
  `};
`
export const StyledTestimonialMenuItem = styled(TestimonialMenuItem)`
  :first-child {
    ${media.lessThan('sm')`
    margin-bottom: 1.5rem;
  `};
  }
`
