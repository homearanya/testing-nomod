import React, { useRef, useState, useEffect } from 'react'
import { Transition } from 'react-transition-group'
import useMedia from 'use-media'

import { $breakpoints } from '../../styles/media'
import useOnClickOutside from '../../utils/hooks/useOnClickOutside'

import { useLocaleState } from '../../context/locale-context'

import {
  LocaleSwitcherWrapper,
  ListsWrapper,
  SelectedLocale,
  Flag,
  StyledArrowDown,
  LocaleItem,
  LocaleCountry,
  StyledListofLocales,
} from './locale-switcher.styled'

const duration = 300

const defaultStyle = {
  transition: `opacity, transform ${duration}ms ease-in-out`,
  opacity: 0,
  transform: 'scale(0)',
}

interface LocaleSwitcherProps {
  comingSoon?: boolean
  props?: React.HTMLAttributes<HTMLDivElement>
}

const LocaleSwitcher = ({
  comingSoon = false,
  ...props
}: LocaleSwitcherProps) => {
  const isMobile = useMedia({ maxWidth: $breakpoints.sm * 16 - 0.001 })
  const [open, setOpen] = useState(false)

  const { index, locales } = useLocaleState()

  const extendedLocales = locales.map((locale, i) => ({
    ...locale,
    originalIndex: i,
  }))

  const ref = useRef(null)
  useOnClickOutside(ref, () => setOpen(false))

  const { country, flag } = locales[index]

  // logic to fix rehydration issue
  const [isClient, setClient] = useState(false)
  const key = isClient ? 'client' : 'server'

  useEffect(() => {
    setClient(true)
  }, [])

  let transitionStyles = {
    entering: { opacity: 1, transform: 'scale(1)' },
    entered: { opacity: 1, transform: 'scale(1)' },
    exiting: { opacity: 0, transform: 'scale(0)' },
    exited: { opacity: 0, transform: 'scale(0)' },
  }

  if (isMobile) {
    transitionStyles = {
      entering: { opacity: 1, transform: 'scale(1) translate(-50%)' },
      entered: { opacity: 1, transform: 'scale(1) translate(-50%)' },
      exiting: { opacity: 0, transform: 'scale(0) translate(-50%)' },
      exited: { opacity: 0, transform: 'scale(0) translate(-50%)  ' },
    }
  }

  return (
    <LocaleSwitcherWrapper
      className="locale-switcher-wrapper"
      ref={ref}
      {...props}
    >
      <SelectedLocale
        comingSoon={comingSoon}
        onClick={() => {
          if (open) {
            setOpen(false)
          } else {
            setOpen(true)
          }
        }}
      >
        <LocaleItem selected comingSoon={comingSoon}>
          <Flag key={key} src={flag.publicURL} alt={country} />
          <LocaleCountry selectedCountry>{country}</LocaleCountry>
        </LocaleItem>
        <StyledArrowDown active={open} />
      </SelectedLocale>

      <Transition in={open} timeout={duration}>
        {(state: 'entering' | 'entered' | 'exiting' | 'exited') => (
          <ListsWrapper
            comingSoon={comingSoon}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <StyledListofLocales
              locales={extendedLocales.filter(locale => locale.available)}
              setOpen={setOpen}
              index={index}
            />
            <StyledListofLocales
              notAvailableList
              locales={extendedLocales.filter(locale => !locale.available)}
              setOpen={setOpen}
              index={index}
            />
          </ListsWrapper>
        )}
      </Transition>
    </LocaleSwitcherWrapper>
  )
}

export default LocaleSwitcher
