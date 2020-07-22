import React, { CSSProperties } from 'react'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

import { TestimonialData } from '../testimonial'
import {
  ListItem,
  RatingArea,
  RatingWrapper,
  LogoWrapper,
  CompanyLogo,
} from './testimonial-menu-item.styled'

interface TestimonialMenuItemProps {
  readonly data: TestimonialData
  readonly className?: string
  readonly style?: CSSProperties
  readonly onClick?: () => void
  readonly active?: boolean
}

export const TestimonialMenuItem = ({
  data: testimonial,
  onClick,
  className = '',
  style = {},
  active,
}: TestimonialMenuItemProps) => {
  return (
    <ListItem
      onClick={onClick}
      active={active}
      className={className}
      style={style}
    >
      <RatingArea>
        <RatingWrapper>
          {testimonial.rating}&nbsp;<span>&#47;&nbsp;5</span>
        </RatingWrapper>
        <Rater total={5} rating={testimonial.rating} interactive={false} />
      </RatingArea>
      <LogoWrapper>
        <CompanyLogo
          image={testimonial.company.logo}
          alt={testimonial.company.name}
        />
      </LogoWrapper>
    </ListItem>
  )
}

export default TestimonialMenuItem
