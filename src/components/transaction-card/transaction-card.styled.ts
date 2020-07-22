import styled from 'styled-components'
import media from '../../styles/media'

interface WrapperProps {
  innerWidth?: number
}
export const Wrapper = styled.article<WrapperProps>`
  position: relative;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 1.3rem 1.7rem;
  border: 0.1rem solid #144de0;
  box-shadow: 0px 0.5rem 3rem rgba(0, 0, 0, 0.12);
  border-radius: 0.5rem;
  width: ${({ innerWidth }) =>
    innerWidth ? `${(innerWidth + 40) / 10}rem` : 'auto'};

  svg {
    flex: 1 0 auto;
    width: 2.1rem;
    height: 2.1rem;
    margin-right: 1rem;

    ${media.lessThan('md')`
      width: 1.9rem;
      height: 1.9rem;
    `};

    ${media.lessThan('sm')`
      width: 1.15rem;
      height: 1.15rem;
    `};
  }

  ::after {
    /* top: 100%;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    right: 52%;
    pointer-events: none;
    border: solid transparent; */
    content: '';
    position: absolute;
    left: calc(50% - 1.5rem);
    top: calc(100% - 0.1rem);
    height: 1.5rem;
    width: 1.5rem;
    background-color: white;
    border-top-right-radius: 0.5rem;
    border-top: 0.1rem solid #144de0;
    border-right: 0.1rem solid #144de0;
    transform: rotate(135deg) translateX(-50%);
  }
`
export const CityLine = styled.div`
  font-size: 1rem;
  color: #272727;
  margin-bottom: 0.3rem;

  ${media.lessThan('md')`
    font-size: 0.9rem;
  `};

  ${media.lessThan('sm')`
    font-size: 0.8rem;
  `};

  span {
    font-weight: 500;
  }
`
export const TransactionBlock = styled.div`
  flex: 1 0 auto;
`
export const TransactionLine = styled.div`
  font-size: 1.4rem;
  color: #272727;
  font-weight: 500;
  ${media.lessThan('md')`
    font-size: 1rem;
  `};

  ${media.lessThan('sm')`
    font-size: 0.9rem;
  `};
`
