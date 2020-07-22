import React, { useState, useEffect } from 'react'
import CookieConsent from 'react-cookie-consent'
import styled from 'styled-components'
import { rgba } from 'polished'

import media from '../styles/media'
import { $colorPrimary, $black, $white } from '../styles/variables'
import LocalisedLink from './localised-link'

const CookieConsentModal = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => setShow(true), 3000)
    return () => clearTimeout(id)
  }, [])

  return (
    <Wrapper show={show}>
      <CookieConsent
        buttonText="ACCEPT"
        containerClasses="cookie-container"
        contentClasses="cookie-text"
        buttonClasses="cookie-button"
        disableStyles={true}
        expires={150}
      >
        <Text>
          By using Nomod, you agree with our{' '}
          <LocalisedLink to="/cookies/">cookie policy</LocalisedLink>
        </Text>
      </CookieConsent>
    </Wrapper>
  )
}

export default CookieConsentModal

interface WrapperProps {
  show: boolean
}
const Wrapper = styled.div<WrapperProps>`
  transition: all 0.5s;

  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  opacity: ${({ show }) => (show ? '1' : '0')};

  .cookie-container {
    display: flex;
    align-items: center;

    background-color: ${rgba($colorPrimary, 0.9)};
    border-radius: 0.6rem;
    position: fixed;
    bottom: 2rem !important;
    padding: 2rem 3rem;
    left: 50%;
    transform: translate(-50%);
    z-index: 999;
    transition: all 0.5s;

    ${media.lessThan('sm')`
      border-radius: 0;
      bottom: 0 !important;
      left:0;
      transform: none;
      width: 100vw;
      justify-content: center;
  `}
  }

  .cookie-button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${$white};
    color: ${$colorPrimary};
    border-radius: 0.6rem;
    border: none;
    transition: 0.2s all;
    text-transform: uppercase;
    font-size: 1.3rem;
    font-style: medium;
    line-height: 1.8rem;
    margin-left: 3rem;
    padding: 1.5rem 2.5rem;

    :hover {
      box-shadow: ${`0px 0.4rem 1.5rem ${rgba($black, 0.3)}`};
    }
  }
`

const Text = styled.p`
  color: ${$white};
  font-size: 1.3rem;
  font-style: medium;
  line-height: 1.8rem;
  line-height: 1.8rem;

  ${media.lessThan('sm')`
    font-size: 1rem;
    line-height: 1.6rem;
  `}

  a:link,
  a:visited {
    color: ${$white};
    font-weight: 500;
    transition: all 0.2s;
  }

  a:hover,
  a:active {
    text-decoration: none;
  }
`
