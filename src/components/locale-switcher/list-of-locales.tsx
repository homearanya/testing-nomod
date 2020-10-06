import React from 'react'
import { addDays } from '../../utils/helpers'
import { useCookies } from 'react-cookie'
import { useLocaleDispatch } from '../../context/locale-context'

import {
  Flag,
  List,
  NotAvailableList,
  LocaleItem,
  LocaleCountry,
} from './locale-switcher.styled'

type Locale = {
  locale: string
  originalIndex: number
  default: boolean
  available: boolean
  country: string
  flag: { publicURL: string }
  dateFormat: string
  defaultTitle: string
  defaultDescription: string
}

interface ListOfLocalesProps {
  locales: Locale[]
  setOpen: (open: boolean) => void
  index: number
  notAvailableList?: boolean
  className?: string
}

const ListOfLocales = ({
  locales,
  setOpen,
  index,
  notAvailableList = false,
  className,
  ...rest
}: ListOfLocalesProps) => {
  const [, setCookie] = useCookies(['nomodLocale'])
  const dispatch = useLocaleDispatch()

  const TheList = notAvailableList ? NotAvailableList : List

  return (
    <TheList className={className} {...rest}>
      {notAvailableList ? <LocaleItem heading>COMING SOON</LocaleItem> : null}
      {locales.map(locale => {
        const { flag, originalIndex, country } = locale
        return (
          <LocaleItem
            notAvailableList={notAvailableList}
            key={originalIndex}
            onClick={() => {
              if (originalIndex !== index) {
                dispatch({
                  type: 'select',
                  payload: {
                    index: originalIndex,
                  },
                })
                setCookie(
                  'nf_country',
                  locale.locale.split('-')[1].toUpperCase(),
                  {
                    path: '/',
                    expires: addDays(new Date(), 180),
                  },
                )
              }
              setOpen(false)
            }}
          >
            <Flag src={flag.publicURL} alt={country} />
            <LocaleCountry selected={originalIndex === index}>
              {country}
            </LocaleCountry>
          </LocaleItem>
        )
      })}
    </TheList>
  )
}
export default ListOfLocales
