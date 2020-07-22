import React, { useState, useRef, useEffect } from 'react'
import { Transition } from 'react-transition-group'
import Scroll from 'react-scroll'
import { graphql, useStaticQuery } from 'gatsby'
import Loader from 'react-loader-spinner'

import { validateEmail } from '../../utils/helpers'
import { useLocaleState } from '../../context/locale-context'
import MessageArea from './message-area'
import {
  IntroText,
  StyledForm,
  InputWrapper,
  StyledInput,
  ButtonWrapper,
  StyledButton,
  ValidationMessage,
} from './email-form.styled'

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

const scroll = Scroll.animateScroll

export interface EmailFormData {
  introText: string
  textPlaceholder: string
  buttonText: string
}

interface EmailFormProps {
  readonly data: EmailFormData
  readonly border?: boolean
  readonly className?: string
  readonly handlerShowSignUp: (e: HTMLInputElement | null) => void
  readonly handlerSetUnfocus?: () => void
  readonly setFocus?: boolean
}

export const EmailForm = ({
  data,
  border,
  className,
  handlerShowSignUp,
  handlerSetUnfocus,
  setFocus = false,
}: EmailFormProps) => {
  const {
    site: {
      siteMetadata: { subscribeMailjetendpoint },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          subscribeMailjetendpoint
        }
      }
    }
  `)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const inputWrapperRef = useRef<HTMLDivElement>(null)
  const ref = useRef<HTMLInputElement>(null)

  const localeState = useLocaleState()
  const { index, locales } = localeState
  const locale = locales[index].locale
  const country = locale.split('-')[1]

  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [failedSubmit, setFailedSubmit] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setSubmitting(true)
    e.preventDefault()

    if (!email) {
      setMessage('Please type out your email address')
      setSubmitting(false)
      return
    }
    if (!validateEmail(email)) {
      setMessage('Please use a valid email address')
      setSubmitting(false)
      return
    }
    //
    fetch(subscribeMailjetendpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        country: country,
        email: email,
      }),
    }).then(res => {
      if (res.status === 200) {
        setEmail('')
        setSubmitted(true)
      } else {
        setSubmitted(false)
        setSubmitting(false)
        setFailedSubmit(true)
      }
    })
    //
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    message && setMessage('')
    setEmail(e.target.value)
  }
  const handleFocus = () => message && setMessage('')

  const { introText, textPlaceholder, buttonText } = data

  useEffect(() => {
    window.addEventListener('scroll', () => handlerShowSignUp(ref.current))

    return () =>
      window.removeEventListener('scroll', () => handlerShowSignUp(ref.current))
  }, [ref])

  useEffect(() => {
    if (setFocus && ref.current) {
      scroll.scrollToTop({ smooth: true, duration: 1000 })
      ref.current.focus()
      handlerSetUnfocus && handlerSetUnfocus()
    }
  }, [setFocus])
  useEffect(() => {
    if (ref.current) {
      ref.current.focus()
    }
  }, [])

  return (
    <div className="email-form-wrapper">
      <MessageArea submitted={submitted} failedSubmit={failedSubmit} />
      {submitted !== true && failedSubmit !== true ? (
        <>
          <IntroText>{introText}</IntroText>
          <StyledForm
            id="email-form"
            className={className}
            onSubmit={handleSubmit}
            noValidate
          >
            <InputWrapper ref={inputWrapperRef}>
              <StyledInput
                ref={ref}
                type="email"
                name="email"
                placeholder={textPlaceholder}
                aria-label="email"
                required
                value={email}
                onChange={handleChange}
                onFocus={handleFocus}
                border={border}
                message={!!message}
              />
            </InputWrapper>
            <ButtonWrapper>
              {submitting && (
                <Loader
                  className="loader"
                  type="ThreeDots"
                  color="#ffffff"
                  height={15}
                  width={40}
                />
              )}

              <StyledButton
                submitting={submitting}
                type="submit"
                disabled={submitting}
              >
                {buttonText}
              </StyledButton>
            </ButtonWrapper>
            <Transition in={!!message} timeout={duration}>
              {(state: 'entering' | 'entered' | 'exiting' | 'exited') => (
                <ValidationMessage
                  style={{
                    ...defaultStyle,
                    ...transitionStyles[state],
                  }}
                >
                  {message}
                </ValidationMessage>
              )}
            </Transition>
          </StyledForm>
        </>
      ) : null}
    </div>
  )
}

export default EmailForm
