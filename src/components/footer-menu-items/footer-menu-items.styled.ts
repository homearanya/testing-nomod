import styled, { css } from 'styled-components'
import { CustomRow, CustomCol } from '../../styles/common.styled'
import media from '../../styles/media'

import {
  $greyRegularDark,
  $greyDarkExtra,
  $colorPrimary,
  $colorBorder,
} from '../../styles/variables'
import { H6 } from '../../styles/common.styled'

import Tag from '../tag'

const menuItem = css`
  font-size: 1.6rem;
  line-height: 2.8rem;
  margin-bottom: 0.6rem;

  ${media.greaterThan('md')`
    font-size: 1.4rem;
  `};
`
interface StyledFooterProps {
  noFooterTop?: boolean
}
export const MenusRow = styled(CustomRow)<StyledFooterProps>`
  width: 100%;
  border-top: ${({ noFooterTop }) =>
    noFooterTop ? '0' : `0.1rem solid ${$colorBorder}`};
  margin: 0 0 5rem !important;

  padding-top: 2rem;
  ul {
    list-style: none;
    li {
      a:link,
      a:visited {
        display: inline-block;
        color: ${$greyRegularDark};
        ${menuItem};
        text-decoration: none;
        transition: all 0.2s;
        white-space: nowrap;
        ${media.lessThan('md')`
          font-size: 1.3rem;
        `}
      }

      a:hover,
      a:active {
        color: ${$colorPrimary};
      }
    }
  }

  p {
    ${menuItem};
  }

  ${media.lessThan('sm')`
    display:none;
  `}
`

export const MenuCol = styled(CustomCol)`
  flex: 0 1 auto !important;
  max-width: 100% !important;
  flex-direction: column;
`

export const MenuHeading = styled(H6)`
  color: ${$greyDarkExtra};
  margin-bottom: 1.2rem;
  text-transform: uppercase;
`

export const BottomMenuWrapperMobile = styled.div`
  ${media.lessThan('sm')`
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
`
export const StyledTag = styled(Tag)`
  margin-left: 1rem;
  margin-bottom: 0.4rem;
`
