import React from 'react'
import { Transition } from 'react-transition-group'

import { Button } from './sign-up-button.styled'

const duration = 300

const defaultStyle = {
  transition: `opacity, transform ${duration}ms ease-in-out`,
  opacity: 0,
  transform: 'scale(0)',
}

const transitionStyles = {
  entering: { opacity: 1, transform: 'scale(1)' },
  entered: { opacity: 1, transform: 'scale(1)' },
  exiting: { opacity: 0, transform: 'scale(0)' },
  exited: { opacity: 0, transform: 'scale(0)' },
}

interface SignUpButtonProps {
  readonly children: React.ReactNode
  readonly show?: boolean
  readonly handlerSetFocus?: () => void
}

const SignUpButton = ({
  children,
  show,
  handlerSetFocus,
  ...rest
}: SignUpButtonProps) => (
  <Transition in={show} timeout={duration}>
    {(state: 'entering' | 'entered' | 'exiting' | 'exited') => (
      <Button
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
        onClick={() => handlerSetFocus && handlerSetFocus()}
        {...rest}
      >
        {children}
      </Button>
    )}
  </Transition>
)

export default SignUpButton
