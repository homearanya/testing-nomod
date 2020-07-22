import React from 'react'
import { Transition } from 'react-transition-group'

import { ResultMessage } from './email-form.styled'

const duration = 300
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
}

interface MessageAreaProps {
  submitted: boolean
  failedSubmit: boolean
}

const MessageArea = ({
  submitted = false,
  failedSubmit = false,
}: MessageAreaProps) => {
  const message = submitted
    ? 'Thank you very much! We\'ll let you know when!<a href="https://twitter.com/intent/follow?screen_name=NomodHQ" target="_blank" rel="noopener noreferrer">Follow our progress on Twitter</a>'
    : failedSubmit
    ? 'Uh oh, something went wrong, please try again!'
    : ''
  return (
    <Transition in={!!message} timeout={duration}>
      {(state: 'entering' | 'entered' | 'exiting' | 'exited') => (
        <ResultMessage
          submitted={submitted}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </Transition>
  )
}
export default MessageArea
