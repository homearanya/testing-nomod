import React from 'react'
import { Link } from 'gatsby'

import { useLocaleState } from '../context/locale-context'

interface LocalisedLinkProps {
  children: React.ReactNode
  to: string
  className?: string
  activeClassName?: string
}

const LocalisedLink = ({
  children,
  to,
  className,
  ...props
}: LocalisedLinkProps) => {
  const { index, locales, siteDefaultLocale } = useLocaleState()

  const currentLocale = locales[index].locale
  const pathPrefix =
    currentLocale === siteDefaultLocale ? '' : `/${currentLocale}`
  return (
    <Link to={`${pathPrefix}${to}`} className={className} {...props}>
      {children}
    </Link>
  )
}

export default LocalisedLink
