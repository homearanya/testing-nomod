import { State as LocalesType } from '../context/locale-context'

export const addDays = (date: Date, days: number): Date => {
  const copy = new Date(Number(date))
  copy.setDate(date.getDate() + days)
  return copy
}

export const textTruncate = (text: string, num: number): string => {
  if (num >= text.length) return text
  let result = ''
  const words = text.split(' ')

  let i = 0
  while (i < words.length) {
    if (result.length + words[i].length + 1 > num) {
      break
    } else {
      result += ` ${words[i]}`
    }
    i++
  }
  if (result[result.length - 1] === '.') {
    result += '..'
  } else {
    result += '...'
  }
  return result
}
export const getSiteDefaultLocale: (locales: Locale[]) => Locale = locales => {
  const defaultLocaleIndex = locales.findIndex(locale => locale.default)
  const siteDefaultLocale =
    defaultLocaleIndex !== -1 ? locales[defaultLocaleIndex] : locales[0]
  return siteDefaultLocale
}

export const checkLocale: (
  localeIn: string,
  locales: Locale[],
) => [Locale, number] = (localeIn, locales) => {
  let selectedLocale = locales.find(locale => locale.locale === localeIn)
  if (!selectedLocale) {
    selectedLocale = getSiteDefaultLocale(locales)
  }
  const selectedLocaleIndex = locales.findIndex(
    locale => locale.locale === (selectedLocale as Locale).locale,
  )
  return [selectedLocale, selectedLocaleIndex]
}

export const getLocaleFromPath = (path, locales) => {
  let potentialLocale
  if (path.match(/^\/[a-z]{2}-[a-z]{2}\//)) {
    potentialLocale = path.split(`/`)[1]
  }

  return checkLocale(potentialLocale, locales)[0]
}

export const buildLocalesArray = (locales, localeBrowser) => {
  // sort alphabetically by country
  const localesArray = locales.map(locale => {
    if (locale.locale) {
      locale.locale = locale.locale.toLowerCase()
    }
    return locale
  })

  localeBrowser = localeBrowser ? localeBrowser.toLowerCase() : ''

  localesArray.sort((a, b) => {
    if (b.country > a.country) {
      return -1
    }
    if (a.country > b.country) {
      return 1
    }
    return 0
  })

  // Rearrange according to default locale
  const localeBrowserIndex = localeBrowser
    ? localesArray.findIndex(locale => {
        return locale.locale === localeBrowser
      })
    : -1

  let defaultLocaleIndex = 0
  if (localeBrowserIndex > -1) {
    defaultLocaleIndex = localeBrowserIndex
  }

  // if (defaultLocaleIndex > 0) {
  //   const defaultLocale = localesArray[defaultLocaleIndex]
  //   localesArray.splice(defaultLocaleIndex, 1)
  //   localesArray.unshift(defaultLocale)
  // }

  return [defaultLocaleIndex, localesArray]
}

export const getMenuLocalized = (menuLocales, currentLocale, defaultLocale) => {
  const currentLocaleIndex = menuLocales.findIndex(
    ({ locale }) => locale === currentLocale,
  )
  const defaultLocaleIndex = menuLocales.findIndex(
    ({ locale }) => locale === defaultLocale,
  )

  let menuLocale
  if (currentLocaleIndex > -1) {
    menuLocale = menuLocales[currentLocaleIndex]
  } else if (defaultLocaleIndex > -1) {
    menuLocale = menuLocales[defaultLocaleIndex]
  }
  return menuLocale
}

export const localisePath = (
  path,
  currentLocale,
  defaultLocale,
  locales,
  allPaths,
) => {
  // logic for coming soon countries
  const indexCurrentLocale = locales.findIndex(
    ({ locale }) => locale === currentLocale,
  )
  if (indexCurrentLocale !== -1) {
    if (!locales[indexCurrentLocale].available) {
      if (
        path === `/${currentLocale}/about/` ||
        path === `/${currentLocale}/about`
      ) {
        path = `/about/`
      }
      if (
        path === `/${currentLocale}/cookies/` ||
        path === `/${currentLocale}/cookies`
      ) {
        path = `/cookies/`
      }
      if (
        path === '/about/' ||
        path === '/about' ||
        path === '/cookies/' ||
        path === '/cookies' ||
        path === `/${currentLocale}/404/` ||
        path === `/${currentLocale}/404`
      ) {
        return path
      } else {
        const processedPath = path.replace(`/${currentLocale}/`, '/')
        if (allPaths.findIndex(p => p === processedPath) !== -1) {
          return `/${currentLocale}/`
        }
      }
    }
  }
  // /////////////////////////
  if (path === '/') {
    if (currentLocale !== defaultLocale) {
      return `/${currentLocale}/`
    }
  }

  const newPath = path
  let potentialLocale
  if (path.match(/^\/[a-z]{2}-[a-z]{2}\//)) {
    potentialLocale = path.split(`/`)[1]
  }

  if (potentialLocale) {
    const isLocale =
      potentialLocale.length === 5 &&
      locales.findIndex(locale => locale.locale === potentialLocale) !== -1

    if (isLocale) {
      if (potentialLocale !== currentLocale) {
        return currentLocale === defaultLocale
          ? path.replace(`/${potentialLocale}/`, '/')
          : path.replace(potentialLocale, currentLocale)
      }
      {
        return currentLocale === defaultLocale
          ? path.replace(`/${potentialLocale}/`, '/')
          : path
      }
    } else {
      // no locale on path
      if (currentLocale !== defaultLocale) {
        return `/${currentLocale}${path}`
      }
    }
  } else {
    // no subfolder - default locale
    if (currentLocale !== defaultLocale) {
      return `/${currentLocale}${path}`
    }
  }

  return newPath
}

export const buildHreflangs = (
  locales: LocalesType,
  path: string,
  siteUrl: string,
): [string, { rel: string; hreflang: string; href: string }[]] => {
  const { index, locales: localesArray, siteDefaultLocale } = locales

  // current locale
  const currentLocale = localesArray[index].locale
  const currentLanguage = currentLocale.split('-')[0]
  // current language (from locale)
  // current path (without locale)
  let currentPath
  if (currentLocale === siteDefaultLocale) {
    currentPath = path
  } else {
    currentPath = path.slice(6)
  }
  // build hreflang array
  const hrefLangTags = [
    {
      rel: 'alternate',
      hreflang: 'x-default',
      href: `${siteUrl}${currentPath}`,
    },
  ]

  localesArray.forEach(locale => {
    // full url for each locale
    let fullUrl
    if (locale.locale === siteDefaultLocale) {
      fullUrl = `${siteUrl}${currentPath}`
    } else {
      fullUrl = `${siteUrl}/${locale.locale}${currentPath}`
    }

    hrefLangTags.push({
      rel: 'alternate',
      hreflang: `${locale.locale}`,
      href: `${fullUrl}`,
    })
  })

  return [currentLanguage, hrefLangTags]
}

export const validateEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}
